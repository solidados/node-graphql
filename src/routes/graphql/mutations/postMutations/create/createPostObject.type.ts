import { GraphQLInputObjectType } from 'graphql';
import {
  nonNullableGraphQLString,
  nonNullableUUIDType,
} from '../../../types/nonNullableFields.type.js';

export const createPostObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    title: { type: nonNullableGraphQLString },
    content: { type: nonNullableGraphQLString },
    authorId: { type: nonNullableUUIDType },
  }),
});
