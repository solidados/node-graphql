import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import postObjectType from '@/routes/graphql/queryTypes/postQuery/post.objectType.js';

const postCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  postObjectType,
);
export default postCollectionType;
