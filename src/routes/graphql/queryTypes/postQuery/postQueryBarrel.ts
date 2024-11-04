import { Post } from '@prisma/client';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import { nonNullableUUIDType } from '../../types/nonNullableFields.type.js';
import postObjectType from './post.objectType.js';
import postCollectionType from './post.collectionType.js';

export const postQuery = {
  type: postObjectType,
  args: {
    id: { type: nonNullableUUIDType },
  },
  resolve: async (_: unknown, args: Post, context: PrismaContextInterface) =>
    await context.prisma.post.findUnique({
      where: { id: args.id },
    }),
  posts: {
    type: postCollectionType,
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.post.findMany(),
  },
};
