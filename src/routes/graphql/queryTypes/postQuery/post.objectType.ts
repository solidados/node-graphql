import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';

const postObjectType = new GraphQLObjectType({
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
  }),
});

/*
type Post {
  id: UUID!
  title: String!
  content: String!
}*/

export default postObjectType;
