import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { Post } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const deletePost = {
  deletePost: {
    type: nonNullableUUIDType,
    args: {
      id: { type: nonNullableUUIDType },
    },
    resolve: async (args: Post, context: PrismaContextInterface) => {
      await context.prisma.post.delete({
        where: { id: args.id },
      });
      return args.id;
    },
  },
};

export default deletePost;
