import { GraphQLInputObjectType } from 'graphql';
import {
  nonNullableGraphQLFloat,
  nonNullableUUIDType,
} from '@/routes/graphql/types/nonNullableFields.type.js';

export const createUserObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: { type: nonNullableUUIDType },
    balance: { type: nonNullableGraphQLFloat },
  }),
});
