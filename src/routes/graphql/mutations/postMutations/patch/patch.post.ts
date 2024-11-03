import postObjectType from '@/routes/graphql/queryTypes/postQuery/post.objectType.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import { PatchPostInterface } from '@/routes/graphql/mutations/postMutations/patch/patchPost.interface.js';
import {
  nonNullablePatchPostObjectType,
  nonNullableUUIDType,
} from '@/routes/graphql/types/nonNullableFields.type.js';

const patchPost = {
  type: postObjectType,
  args: {
    id: { type: nonNullableUUIDType },
    dto: { type: nonNullablePatchPostObjectType },
  },
  resolve: async (
    _: unknown,
    args: PatchPostInterface,
    context: PrismaContextInterface,
  ) =>
    await context.prisma.post.update({
      where: { id: args.id },
      data: args.dto,
    }),
};

export default patchPost;
