import { GraphQLObjectType, GraphQLSchema } from 'graphql';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {},
});

export const rootSchema: GraphQLSchema = new GraphQLSchema({
  query: queryType,
});
