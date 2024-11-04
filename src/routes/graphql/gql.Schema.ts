import { GraphQLSchema } from 'graphql';
import queryTypes from './queryTypes/queryBarrel.js';
import mutationTypes from './mutations/mutationBarrel.js';

const graphQLSchema = new GraphQLSchema({
  query: queryTypes,
  mutation: mutationTypes,
});

export default graphQLSchema;
