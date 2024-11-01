import { GraphQLEnumType } from 'graphql/type/index.js';
import { MemberTypeId } from '@/routes/member-types/schemas.js';

export const memberTypeIdEnum = new GraphQLEnumType({
  name: 'MemberTypeId',
  description: 'member Type ID',
  values: {
    basic: {
      value: MemberTypeId.BASIC,
      description: 'basic',
    },
    business: {
      value: MemberTypeId.BUSINESS,
      description: 'business',
    },
  },
});

// TODO: See /member-types/schemas.ts
/*
enum MemberTypeId {
  BASIC
  BUSINESS
}*/
