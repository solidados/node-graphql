import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import { UUIDType } from '../../types/uuid.js';
import { nonNullableUUIDType } from '../../types/nonNullableFields.type.js';
import { UnsubscribeInterface } from './subscriptions.interface.js';

const unsubscribe = {
  type: UUIDType,
  args: {
    userId: { type: nonNullableUUIDType },
    authorId: { type: nonNullableUUIDType },
  },
  resolve: async (
    _: unknown,
    args: UnsubscribeInterface,
    context: PrismaContextInterface,
  ) => {
    await context.prisma.subscribersOnAuthors.delete({
      where: {
        subscriberId_authorId: {
          subscriberId: args.userId,
          authorId: args.authorId,
        },
      },
    });
    return args.userId;
  },
};

export default unsubscribe;
