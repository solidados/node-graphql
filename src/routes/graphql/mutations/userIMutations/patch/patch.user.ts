import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import {
  nonNullablePatchUserObjectType,
  nonNullableUUIDType,
} from '@/routes/graphql/types/nonNullableFields.type.js';
import { PatchUserInterface } from '@/routes/graphql/mutations/userIMutations/patch/patchUser.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const patchUser = {
  patchUser: {
    type: userObjectType,
    args: { id: { type: nonNullableUUIDType } },
    dto: { type: nonNullablePatchUserObjectType },
  },
  resolve: async (args: PatchUserInterface, context: PrismaContextInterface) =>
    await context.prisma.user.update({
      where: {
        id: args.id,
      },
      data: args.dto,
    }),
};

export default patchUser;
