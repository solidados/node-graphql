import { GraphQLInputObjectType } from 'graphql';
import {
  nonNullableGraphQLFloat,
  nonNullableUUIDType,
} from '../../../types/nonNullableFields.type.js';

export const createUserObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: { type: nonNullableUUIDType },
    balance: { type: nonNullableGraphQLFloat },
  }),
});
