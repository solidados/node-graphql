import { MemberType } from '@prisma/client';
import memberObjectType from '../../queryTypes/memberQuery/member.objectType.js';
import memberCollectionType from '../../queryTypes/memberQuery/member.collectionType.js';
import { nonNullableMemberEnumType } from '../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';

export const memberQuery = {
  type: memberObjectType,
  description: 'Member Type',
  args: {
    id: { type: nonNullableMemberEnumType },
  },
  resolve: async (_: unknown, args: MemberType, context: PrismaContextInterface) =>
    await context.prisma.memberType.findUnique({
      where: { id: args.id },
    }),
  memberTypes: {
    type: memberCollectionType,
    description: 'Members Types',
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.memberType.findMany(),
  },
};
