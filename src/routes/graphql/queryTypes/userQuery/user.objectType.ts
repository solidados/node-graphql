import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import { nonNullableGraphQLFloat } from '@/routes/graphql/types/nonNullableFields.type.js';
import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';
import { Profile, User } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import postCollectionType from '@/routes/graphql/queryTypes/postQuery/post.collectionType.js';
import { UserSubscriptionInterface } from '@/routes/graphql/types/prismaSource.interface.js';

const userObjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'User ID',
    },
    name: {
      type: UUIDType,
      description: 'User Name',
    },
    balance: {
      type: nonNullableGraphQLFloat,
      description: 'User balance',
    },
    profile: {
      type: profileObjectType,
      description: 'User Profile',
      resolve: async (
        source: User,
        _: unknown,
        context: PrismaContextInterface,
      ): Promise<Profile> => await context.loaders.profileLoader.load(source.id),
    },
    posts: {
      type: postCollectionType,
      description: 'User Posts',
      resolve: async (source: User, _: unknown, context: PrismaContextInterface) =>
        await context.loaders.postLoader.load(source.id),
    },
    userSubscribedTo: {
      type: new GraphQLList(userObjectType),
      description: 'User Subscription table column',
      resolve: async (
        source: UserSubscriptionInterface,
        _: unknown,
        context: PrismaContextInterface,
      ) => {
        if (source.userSubscribedTo) {
          const authorIDs: Array<string> = source.userSubscribedTo.map(
            (user) => user.authorId,
          );
          return await context.loaders.userLoader.loadMany(authorIDs);
        }
        await context.loaders.userSubscribedToLoader.load(source.id);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(userObjectType),
      description: 'User Subscribers table column',
      resolve: async (
        source: UserSubscriptionInterface,
        _: unknown,
        context: PrismaContextInterface,
      ) => {
        if (source.subscribedToUser) {
          const subscriberIDs: Array<string> = source.subscribedToUser.map(
            (user) => user.subscriberId,
          );
          return await context.loaders.userLoader.loadMany(subscriberIDs);
        }
        return await context.loaders.subscribedToUserLoader.load(source.id);
      },
    },
  }),
});

/*
type User {
  id: UUID!
  name: String!
  balance: Float!
  profile: Profile
  posts: [Post!]!
  userSubscribedTo: [User!]!
  subscribedToUser: [User!]!
}*/

export default userObjectType;
