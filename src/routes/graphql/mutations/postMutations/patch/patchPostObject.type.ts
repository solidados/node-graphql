import { GraphQLInputObjectType, GraphQLString } from 'graphql';
// import { UUIDType } from '../../../types/uuid.js';

const patchPostObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdatePostInput',
  fields: () => ({
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

export default patchPostObjectType;
