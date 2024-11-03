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
import { memberTypeIdEnum } from '../queryTypes/memberQuery/member.typeIdEnum.js';
import { createUserObjectType } from '../mutations/userMutations/create/createUserObject.type.js';
import { patchUserObjectType } from '../mutations/userMutations/patch/patchUserObject.type.js';
import { createProfileObjectType } from '../mutations/profileMutations/create/createProfileObject.type.js';
import { patchProfileObjectType } from '../mutations/profileMutations/patch/patchProfileObject.type.js';
import { createPostObjectType } from '../mutations/postMutations/create/createPostObject.type.js';
import patchPostObjectType from '../mutations/postMutations/patch/patchPostObject.type.js';

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

// User Mutations
const nonNullableCreateUserObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createUserObjectType);
const nonNullablePatchUserObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(patchUserObjectType);

// Profile Mutations
const nonNullableCreateProfileObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createProfileObjectType);
const nonNullablePatchProfileObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(patchProfileObjectType);

// Post Mutations
const nonNullableCreatePostObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(createPostObjectType);
const nonNullablePatchPostObjectType: GraphQLNonNull<GraphQLInputObjectType> =
  new GraphQLNonNull(patchPostObjectType);

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
  nonNullablePatchPostObjectType,
};
