import { userQuery } from '@/routes/graphql/queryTypes/userQuery/index.js';
import { postQuery } from '@/routes/graphql/queryTypes/postQuery/index.js';
import { profileQuery } from '@/routes/graphql/queryTypes/profileQuery/index.js';
import { memberQuery } from '@/routes/graphql/queryTypes/memberQuery/index.js';
import { GraphQLObjectType } from 'graphql/type/index.js';

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
