import profileObjectType from '../../../queryTypes/profileQuery/profile.objectType.js';
import {
  nonNullablePatchProfileObjectType,
  nonNullableUUIDType,
} from '../../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';
import { PatchProfileInterface } from './patchProfile.interface.js';

const patchProfile = {
  type: profileObjectType,
  args: {
    id: { type: nonNullableUUIDType },
    dto: { type: nonNullablePatchProfileObjectType },
  },
  resolve: async (
    _: unknown,
    args: PatchProfileInterface,
    context: PrismaContextInterface,
  ) =>
    await context.prisma.profile.update({
      where: { id: args.id },
      data: args.dto,
    }),
};

export default patchProfile;
