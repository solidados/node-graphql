import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import profileObjectType from './profile.objectType.js';

const profileCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  profileObjectType,
);

export default profileCollectionType;
