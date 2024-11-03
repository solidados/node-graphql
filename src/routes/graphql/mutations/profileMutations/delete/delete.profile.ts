import { Profile } from '@prisma/client';
import { nonNullableUUIDType } from '../../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

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
