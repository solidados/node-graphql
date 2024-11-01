import {
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';

const userObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'User ID',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User Name',
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat),
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
