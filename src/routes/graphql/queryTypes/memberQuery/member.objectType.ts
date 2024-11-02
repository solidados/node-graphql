import { GraphQLObjectType } from 'graphql/type/index.js';
import { memberTypeIdEnum } from '@/routes/graphql/queryTypes/memberQuery/member.typeIdEnum.js';
import {
  nonNullableGraphQLFloat,
  nonNullableGraphQLInt,
} from '@/routes/graphql/types/nonNullableFields.type.js';

const memberObjectType = new GraphQLObjectType({
  name: 'Member',
  description: 'Member Type',
  fields: () => ({
    id: {
      type: memberTypeIdEnum,
      description: 'Member Type ID',
    },
    discount: {
      type: nonNullableGraphQLFloat,
      description: 'Price Discount Amount',
    },
    postsLimitPerMonth: {
      type: nonNullableGraphQLInt,
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
