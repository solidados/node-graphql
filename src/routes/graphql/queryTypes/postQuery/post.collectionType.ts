import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import postObjectType from './post.objectType.js';

const postCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  postObjectType,
);
export default postCollectionType;
