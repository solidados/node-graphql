import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';
import {
  nonNullablePatchProfileObjectType,
  nonNullableUUIDType,
} from '@/routes/graphql/types/nonNullableFields.type.js';
import { PatchProfileInterface } from '@/routes/graphql/mutations/profileMutations/patch/patchProfile.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

const patchProfile = {
  patchProfile: {
    type: profileObjectType,
    args: {
      id: { type: nonNullableUUIDType },
      dto: { type: nonNullablePatchProfileObjectType },
    },
    resolve: async (args: PatchProfileInterface, context: PrismaContextInterface) =>
      await context.prisma.profile.update({
        where: { id: args.id },
        data: args.dto,
      }),
  },
};

export default patchProfile;
