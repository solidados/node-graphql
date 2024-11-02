import postObjectType from '@/routes/graphql/queryTypes/postQuery/post.objectType.js';
import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { Post } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import postCollectionType from '@/routes/graphql/queryTypes/postQuery/post.collectionType.js';

export const postQuery = {
  post: {
    type: postObjectType,
    args: {
      id: { type: nonNullableUUIDType },
    },
    resolve: async (_: unknown, args: Post, context: PrismaContextInterface) =>
      await context.prisma.post.findUnique({
        where: { id: args.id },
      }),
  },
  posts: {
    type: postCollectionType,
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.post.findMany(),
  },
};
