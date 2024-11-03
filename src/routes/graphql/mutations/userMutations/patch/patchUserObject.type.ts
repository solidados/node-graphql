import { GraphQLFloat, GraphQLInputObjectType } from 'graphql';
import { UUIDType } from '../../../types/uuid.js';

export const patchUserObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: () => ({
    name: { type: UUIDType },
    balance: { type: GraphQLFloat },
  }),
});
