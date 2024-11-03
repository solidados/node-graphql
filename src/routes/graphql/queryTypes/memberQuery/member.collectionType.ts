import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import memberObjectType from './member.objectType.js';

const memberCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  memberObjectType,
);
export default memberCollectionType;
