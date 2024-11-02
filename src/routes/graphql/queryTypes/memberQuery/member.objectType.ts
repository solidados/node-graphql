import { GraphQLObjectType } from 'graphql/type/index.js';
import { memberTypeIdEnum } from '@/routes/graphql/queryTypes/memberQuery/member.typeIdEnum.js';
import {
  nonNullableGraphQLFloat,
  nonNullableGraphQLInt,
} from '@/routes/graphql/types/nonNullableFields.type.js';
import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';
import { MemberType } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

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
