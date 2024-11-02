import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLScalarType,
  GraphQLNonNull,
  GraphQLInputObjectType,
} from 'graphql';
import { UUIDType } from './uuid.js';
import { GraphQLEnumType } from 'graphql/type/index.js';
import { memberTypeIdEnum } from '@/routes/graphql/queryTypes/memberQuery/member.typeIdEnum.js';
import { createUserObjectType } from '@/routes/graphql/mutations/userIMutations/create/createUserObject.type.js';
import { patchUserObjectType } from '@/routes/graphql/mutations/userIMutations/patch/patchUserObject.type.js';
import { createProfileObjectType } from '@/routes/graphql/mutations/profileMutations/create/createProfileObject.type.js';
import { patchProfileObjectType } from '@/routes/graphql/mutations/profileMutations/patch/patchProfileObject.type.js';
import { createPostObjectType } from '@/routes/graphql/mutations/postMutations/create/createPostObject.type.js';

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

const nonNullableCreateUserObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createUserObjectType);
const nonNullablePatchUserObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(patchUserObjectType);

const nonNullableCreateProfileObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createProfileObjectType);
const nonNullablePatchProfileObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(patchProfileObjectType);

const nonNullableCreatePostObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createPostObjectType);

export {
  nonNullableGraphQLInt,
  nonNullableGraphQLFloat,
  nonNullableGraphQLBoolean,
  nonNullableUUIDType,
  nonNullableMemberEnumType,
  nonNullableCreateUserObjectType,
  nonNullablePatchUserObjectType,
  nonNullableCreateProfileObjectType,
  nonNullablePatchProfileObjectType,
  nonNullableCreatePostObjectType,
};
