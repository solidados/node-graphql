import { GraphQLSchema } from 'graphql';
import queryTypes from './queryTypes/index.js';
import mutationTypes from './mutations/index.js';

const graphQLSchema = new GraphQLSchema({
  query: queryTypes,
  mutation: mutationTypes,
});

export default graphQLSchema;
