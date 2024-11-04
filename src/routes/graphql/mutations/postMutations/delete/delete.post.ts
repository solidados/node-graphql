import { Post } from '@prisma/client';
import { nonNullableUUIDType } from '../../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

const deletePost = {
  type: nonNullableUUIDType,
  args: {
    id: { type: nonNullableUUIDType },
  },
  resolve: async (_: unknown, args: Post, context: PrismaContextInterface) => {
    await context.prisma.post.delete({
      where: { id: args.id },
    });
    return args.id;
  },
};

export default deletePost;
