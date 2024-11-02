import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { User } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const deleteUser = {
  deleteUser: {
    type: nonNullableUUIDType,
    args: {
      id: { type: nonNullableUUIDType },
    },
    resolve: async (args: User, context: PrismaContextInterface): Promise<string> => {
      await context.prisma.user.delete({
        where: { id: args.id },
      });
      return args.id;
    },
  },
};

export default deleteUser;
