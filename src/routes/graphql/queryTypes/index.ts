import { GraphQLObjectType } from 'graphql/type/index.js';
import { userQuery } from './userQuery/index.js';
import { profileQuery } from './profileQuery/index.js';
import { postQuery } from './postQuery/index.js';
import { memberQuery } from './memberQuery/index.js';

const queryFields = {
  ...userQuery,
  ...profileQuery,
  ...postQuery,
  ...memberQuery,
};

const queryTypes = new GraphQLObjectType({
  name: 'Query',
  fields: () => queryFields,
});

export default queryTypes;
