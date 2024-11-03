import userObjectType from '../../queryTypes/userQuery/user.objectType.js';
import { nonNullableUUIDType } from '../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import { SubscribeInterface } from './subscriptions.interface.js';

const subscribe = {
  type: userObjectType,
  args: {
    userId: { type: nonNullableUUIDType },
    authorId: { type: nonNullableUUIDType },
  },
  resolve: async (
    _: unknown,
    args: SubscribeInterface,
    context: PrismaContextInterface,
  ) =>
    await context.prisma.user.update({
      where: { id: args.userId },
      data: {
        userSubscribedTo: {
          create: {
            authorId: args.authorId,
          },
        },
      },
    }),
};

export default subscribe;
