import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';

const userCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  userObjectType,
);

export default userCollectionType;
