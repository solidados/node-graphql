import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';
import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { Profile } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import profileCollectionType from '@/routes/graphql/queryTypes/profileQuery/profile.collectionType.js';

export const profileQuery = {
  profile: {
    type: profileObjectType,
    args: {
      id: { type: nonNullableUUIDType },
    },
    resolve: async (_: unknown, args: Profile, context: PrismaContextInterface) =>
      await context.prisma.profile.findUnique({
        where: { id: args.id },
      }),
  },
  profiles: {
    type: profileCollectionType,
    resolve: async (context: PrismaContextInterface) =>
      await context.prisma.profile.findMany(),
  },
};
