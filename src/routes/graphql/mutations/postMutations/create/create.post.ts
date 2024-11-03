import postObjectType from '@/routes/graphql/queryTypes/postQuery/post.objectType.js';
import { nonNullableCreatePostObjectType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { CreatePostInterface } from '@/routes/graphql/mutations/postMutations/create/createPost.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

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
