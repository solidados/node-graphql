import userObjectType from '../../../queryTypes/userQuery/user.objectType.js';
import { nonNullableCreateUserObjectType } from '../../../types/nonNullableFields.type.js';
import { CreateUserInterface } from './createUser.interface.js';
import { PrismaContextInterface } from '../../../types/prismaContext.interface.js';

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
