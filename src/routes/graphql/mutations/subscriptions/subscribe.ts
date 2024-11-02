import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import { SubscribeInterface } from '@/routes/graphql/mutations/subscriptions/subscriptions.interface.js';
import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';

const subscribe = {
  subscribe: {
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
  },
};

export default subscribe;
