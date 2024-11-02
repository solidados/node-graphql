import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import { nonNullableGraphQLFloat } from '@/routes/graphql/types/nonNullableFields.type.js';

const userObjectType = new GraphQLObjectType({
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
    // TODO: add types for profile, posts, subscriptions, according to type User:
  }),
});

/*
* type User {
  id: UUID!
  name: String!
  balance: Float!
  profile: Profile
  posts: [Post!]!
  userSubscribedTo: [User!]!
  subscribedToUser: [User!]!
}*/

export default userObjectType;
