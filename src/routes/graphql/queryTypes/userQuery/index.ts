import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import { nonNullableUUIDType } from '@/routes/graphql/types/nonNullableFields.type.js';
import { User } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import userCollectionType from '@/routes/graphql/queryTypes/userQuery/user.collectionType.js';
import { GraphQLResolveInfo } from 'graphql/type/index.js';
import {
  FieldsByTypeName,
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';

export const userQuery = {
  user: {
    type: userObjectType,
    args: {
      id: { type: nonNullableUUIDType },
    },
    resolve: async (_: unknown, args: User, context: PrismaContextInterface) =>
      await context.prisma.user.findUnique({
        where: { id: args.id },
      }),
    users: {
      type: userCollectionType,
      description: 'Users Collection',
      resolve: async (
        _: unknown,
        context: PrismaContextInterface,
        resolveInfo: GraphQLResolveInfo,
      ) => {
        const parsedResolveInfoFragment:
          | ResolveTree
          | FieldsByTypeName
          | null
          | undefined = parseResolveInfo(resolveInfo);
        const { fields } = simplifyParsedResolveInfoFragmentWithType(
          parsedResolveInfoFragment as ResolveTree,
          userCollectionType,
        );
        const userSubscribedTo: boolean = 'userSubscribedTo' in fields;
        const subscribedToUser: boolean = 'subscribedToUser' in fields;

        const users = await context.prisma.user.findMany({
          include: { userSubscribedTo, subscribedToUser },
        });

        users.forEach((user) => context.loaders.userLoader.prime(user.id, user));

        return users;
      },
    },
  },
};
