import { GraphQLObjectType, GraphQLSchema } from 'graphql/type/index.js';

const queryType: GraphQLObjectType<string, typeof Object> = new GraphQLObjectType({
  name: 'Query',
  fields: {},
});

export const rootSchema: GraphQLSchema = new GraphQLSchema({
  query: queryType,
});
