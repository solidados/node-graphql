import profileObjectType from '../../../queryTypes/profileQuery/profile.objectType.js';
import { nonNullableCreateProfileObjectType } from '../../../types/nonNullableFields.type.js';
import { CreateProfileInterface } from './createProfile.interface.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

const createProfile = {
  type: profileObjectType,
  args: {
    dto: { type: nonNullableCreateProfileObjectType },
  },
  resolve: async (
    _: unknown,
    args: CreateProfileInterface,
    context: PrismaContextInterface,
  ) =>
    context.prisma.profile.create({
      data: args.dto,
    }),
};

export default createProfile;
