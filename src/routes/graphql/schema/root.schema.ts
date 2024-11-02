import { GraphQLObjectType, GraphQLSchema } from 'graphql/type/index.js';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {},
});

export const rootSchema = new GraphQLSchema({
  query: queryType,
});
