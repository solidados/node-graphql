import { GraphQLSchema } from 'graphql';
import queryTypes from '@/routes/graphql/queryTypes/index.js';
import mutationTypes from '@/routes/graphql/mutations/index.js';

const graphQLSchema = new GraphQLSchema({
  query: queryTypes,
  mutation: mutationTypes,
});

export default graphQLSchema;
