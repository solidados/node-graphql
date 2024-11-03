import { GraphQLInputObjectType } from 'graphql';
import { nonNullableUUIDType } from '../../../types/nonNullableFields.type.js';

export const createPostObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    title: { type: nonNullableUUIDType },
    content: { type: nonNullableUUIDType },
    authorId: { type: nonNullableUUIDType },
  }),
});
