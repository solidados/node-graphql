import { User } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql/type/index.js';
import { nonNullableUUIDType } from '../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import userObjectType from './user.objectType.js';
import userCollectionType from './user.collectionType.js';
import {
  FieldsByTypeName,
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';

export const userQuery = {
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
      console.log(`>>> \x1b[92mStart of UserQuery\x1b[0m`);
      const parsedResolveInfoFragment: ResolveTree | FieldsByTypeName | null | undefined =
        parseResolveInfo(resolveInfo);
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
      console.log(`>>> \x1b[93mEnd of UserQuery\x1b[0m`);
      return users;
    },
  },
};
