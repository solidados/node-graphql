import { GraphQLObjectType } from 'graphql/type/index.js';
import { Post } from '@prisma/client';
import { UUIDType } from '../../types/uuid.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import userObjectType from '../../queryTypes/userQuery/user.objectType.js';
import { nonNullableGraphQLString } from '../../types/nonNullableFields.type.js';

const postObjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'Post ID',
    },
    title: {
      type: nonNullableGraphQLString,
      description: 'Post Title',
    },
    content: {
      type: nonNullableGraphQLString,
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
