import { GraphQLInputObjectType } from 'graphql';
import { UUIDType } from '@/routes/graphql/types/uuid.js';

const patchPostObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdatePostInput',
  fields: () => ({
    title: { type: UUIDType },
    content: { type: UUIDType },
  }),
});

export default patchPostObjectType;
