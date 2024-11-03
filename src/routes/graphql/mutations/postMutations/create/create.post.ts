import postObjectType from '../../../queryTypes/postQuery/post.objectType.js';
import { nonNullableCreatePostObjectType } from '../../../types/nonNullableFields.type.js';
import { CreatePostInterface } from './createPost.interface.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

const createPost = {
  type: postObjectType,
  args: {
    dto: { type: nonNullableCreatePostObjectType },
  },
  resolve: async (
    _: unknown,
    args: CreatePostInterface,
    context: PrismaContextInterface,
  ) =>
    await context.prisma.post.create({
      data: args.dto,
    }),
};

export default createPost;
