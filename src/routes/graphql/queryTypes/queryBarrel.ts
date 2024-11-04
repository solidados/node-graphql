import { GraphQLObjectType } from 'graphql/type/index.js';
import { userQuery } from './userQuery/userQueryBarrel.js';
import { profileQuery } from './profileQuery/profileQueryBarrel.js';
import { postQuery } from './postQuery/postQueryBarrel.js';
import { memberQuery } from './memberQuery/memberQueryBarrel.js';

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
