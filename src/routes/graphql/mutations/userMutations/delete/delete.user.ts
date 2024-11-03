import { User } from '@prisma/client';
import { nonNullableUUIDType } from '../../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

const deleteUser = {
  type: nonNullableUUIDType,
  args: {
    id: { type: nonNullableUUIDType },
  },
  resolve: async (
    _: unknown,
    args: User,
    context: PrismaContextInterface,
  ): Promise<string> => {
    await context.prisma.user.delete({
      where: { id: args.id },
    });
    return args.id;
  },
};

export default deleteUser;
