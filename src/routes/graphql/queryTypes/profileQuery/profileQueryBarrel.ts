import { Profile } from '@prisma/client';
import profileObjectType from './profile.objectType.js';
import profileCollectionType from './profile.collectionType.js';
import { nonNullableUUIDType } from '../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';

export const profileQuery = {
  type: profileObjectType,
  args: {
    id: { type: nonNullableUUIDType },
  },
  resolve: async (_: unknown, args: Profile, context: PrismaContextInterface) =>
    await context.prisma.profile.findUnique({
      where: { id: args.id },
    }),
  profiles: {
    type: profileCollectionType,
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.profile.findMany(),
  },
};
