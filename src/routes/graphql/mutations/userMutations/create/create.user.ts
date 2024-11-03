import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import { CreateUserInterface } from '@/routes/graphql/mutations/userMutations/create/createUser.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import { nonNullableCreateUserObjectType } from '@/routes/graphql/types/nonNullableFields.type.js';

const createUser = {
  type: userObjectType,
  args: {
    dto: { type: nonNullableCreateUserObjectType },
  },
  resolve: async (
    _: unknown,
    args: CreateUserInterface,
    context: PrismaContextInterface,
  ) => await context.prisma.user.create({ data: args.dto }),
};

export default createUser;
