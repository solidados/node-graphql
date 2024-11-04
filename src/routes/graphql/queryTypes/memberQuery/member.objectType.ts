import { MemberType } from '@prisma/client';
import { GraphQLObjectType } from 'graphql/type/index.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import profileObjectType from '../profileQuery/profile.objectType.js';
import {
  nonNullableGraphQLFloat,
  nonNullableGraphQLInt,
} from '../../types/nonNullableFields.type.js';
import { memberTypeIdEnum } from './member.typeIdEnum.js';

const memberObjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Member',
  description: 'Member Type',
  fields: () => ({
    id: {
      type: memberTypeIdEnum,
      description: 'Member Type ID',
    },
    discount: {
      type: nonNullableGraphQLFloat,
      description: 'Discount',
    },
    postsLimitPerMonth: {
      type: nonNullableGraphQLInt,
      description: 'Posts Monthly Limit Amount',
    },
    profiles: {
      type: profileObjectType,
      description: 'Member Profiles',
      resolve: async (source: MemberType, _: unknown, context: PrismaContextInterface) =>
        await context.prisma.profile.findMany({
          where: { memberTypeId: source.id },
        }),
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
