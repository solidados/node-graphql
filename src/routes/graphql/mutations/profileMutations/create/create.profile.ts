import profileObjectType from '@/routes/graphql/queryTypes/profileQuery/profile.objectType.js';
import { nonNullableCreateProfileObjectType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { CreateProfileInterface } from '@/routes/graphql/mutations/profileMutations/create/createProfile.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';

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
