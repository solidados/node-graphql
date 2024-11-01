import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql/type/index.js';
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
      type: new GraphQLNonNull(GraphQLString),
      description: 'Post Title',
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
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
