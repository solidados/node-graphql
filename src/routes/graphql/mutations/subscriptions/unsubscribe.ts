import { UnsubscribeInterface } from '@/routes/graphql/mutations/subscriptions/subscriptions.interface.js';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';

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
