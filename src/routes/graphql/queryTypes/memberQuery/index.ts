import memberObjectType from '@/routes/graphql/queryTypes/memberQuery/member.objectType.js';
import { nonNullableMemberEnumType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { MemberType } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import memberCollectionType from '@/routes/graphql/queryTypes/memberQuery/member.collectionType.js';

export const memberQuery = {
  memberType: {
    type: memberObjectType,
    description: 'Member Type',
    args: {
      id: { type: nonNullableMemberEnumType },
    },
    resolve: async (_: unknown, args: MemberType, context: PrismaContextInterface) =>
      await context.prisma.memberType.findUnique({
        where: { id: args.id },
      }),
  },
  memberTypes: {
    type: memberCollectionType,
    description: 'Members Types',
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.memberType.findMany(),
  },
};
