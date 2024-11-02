import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLScalarType,
  GraphQLNonNull,
} from 'graphql';
import { UUIDType } from './uuid.js';
import { GraphQLEnumType } from 'graphql/type/index.js';
import { memberTypeIdEnum } from '@/routes/graphql/queryTypes/memberQuery/member.typeIdEnum.js';

const nonNullableGraphQLInt: GraphQLNonNull<GraphQLScalarType<number, number>> =
  new GraphQLNonNull(GraphQLInt);

const nonNullableGraphQLFloat: GraphQLNonNull<GraphQLScalarType<number, number>> =
  new GraphQLNonNull(GraphQLFloat);

/*const nonNullableGraphQLString = new GraphQLNonNull(GraphQLString);*/

const nonNullableGraphQLBoolean: GraphQLNonNull<GraphQLScalarType<boolean, boolean>> =
  new GraphQLNonNull(GraphQLBoolean);

const nonNullableUUIDType: GraphQLNonNull<GraphQLScalarType<string | undefined, string>> =
  new GraphQLNonNull(UUIDType);

const nonNullableMemberEnumType: GraphQLNonNull<GraphQLEnumType> = new GraphQLNonNull(
  memberTypeIdEnum,
);

export {
  nonNullableGraphQLInt,
  nonNullableGraphQLFloat,
  nonNullableGraphQLBoolean,
  nonNullableUUIDType,
  nonNullableMemberEnumType,
};
