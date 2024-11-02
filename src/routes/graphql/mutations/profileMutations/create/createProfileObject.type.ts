import { GraphQLInputObjectType } from 'graphql';
import {
  nonNullableGraphQLBoolean,
  nonNullableGraphQLInt,
  nonNullableMemberEnumType,
  nonNullableUUIDType,
} from '@/routes/graphql/types/nonNullableFields.type.js';

export const createProfileObjectType: GraphQLInputObjectType = new GraphQLInputObjectType(
  {
    name: 'CreateProfileInput',
    fields: () => ({
      isMale: { type: nonNullableGraphQLBoolean },
      yearOfBirth: { type: nonNullableGraphQLInt },
      userId: { type: nonNullableUUIDType },
      memberTypeId: { type: nonNullableMemberEnumType },
    }),
  },
);
