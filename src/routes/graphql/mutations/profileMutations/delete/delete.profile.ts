import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { Profile } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const deleteProfile = {
  type: nonNullableUUIDType,
  args: {
    id: { type: nonNullableUUIDType },
  },
  resolve: async (_: unknown, args: Profile, context: PrismaContextInterface) => {
    await context.prisma.profile.delete({
      where: { id: args.id },
    });
    return args.id;
  },
};

export default deleteProfile;
