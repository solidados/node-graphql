import postObjectType from '../../../queryTypes/postQuery/post.objectType.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';
import {
  nonNullablePatchPostObjectType,
  nonNullableUUIDType,
} from '../../../types/nonNullableFields.type.js';
import { PatchPostInterface } from './patchPost.interface.js';

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
