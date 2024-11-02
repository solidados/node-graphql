import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import { Post } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const postObjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'Post ID',
    },
    title: {
      type: UUIDType,
      description: 'Post Title',
    },
    content: {
      type: UUIDType,
      description: 'Post Content',
    },
    author: {
      type: userObjectType,
      description: 'Author',
      resolve: async (source: Post, _: unknown, context: PrismaContextInterface) =>
        await context.prisma.user.findUnique({
          where: { id: source.authorId },
        }),
    },
    authorId: {
      type: UUIDType,
      description: 'Author ID',
    },
  }),
});

/*
type Post {
  id: UUID!
  title: String!
  content: String!
}*/

export default postObjectType;
