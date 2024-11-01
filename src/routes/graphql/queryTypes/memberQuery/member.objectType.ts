import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';

const memberObjectType = new GraphQLObjectType({
  name: 'Member',
  description: 'Member Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'Member Type ID',
    },
    discount: {
      type: GraphQLFloat,
      description: 'Price Discount Amount',
    },
    postsLimitPerMonth: {
      type: GraphQLInt,
      description: 'Posts Monthly Limit Amount',
    },
  }),
});
/*
type MemberType {
  id: MemberTypeId!
  discount: Float!
  postsLimitPerMonth: Int!
}*/
export default memberObjectType;
