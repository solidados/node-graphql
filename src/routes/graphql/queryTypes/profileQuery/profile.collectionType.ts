import { GraphQLList, GraphQLObjectType } from 'graphql/type/index.js';
import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';

const profileCollectionType: GraphQLList<GraphQLObjectType> = new GraphQLList(
  profileObjectType,
);

export default profileCollectionType;
