import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import {
  nonNullableGraphQLBoolean,
  nonNullableGraphQLInt,
} from '@/routes/graphql/types/nonNullableFields.type.js';
import userObjectType from '@/routes/graphql/queryTypes/userQuery/user.objectType.js';
import { Profile } from '@prisma/client';
import { PrismaContextInterface } from '@/routes/graphql/types/prismaContext.interface.js';
import memberObjectType from '@/routes/graphql/queryTypes/memberQuery/member.objectType.js';
import { memberTypeIdEnum } from '@/routes/graphql/queryTypes/memberQuery/member.typeIdEnum.js';

const profileObjectType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'Profile ID',
    },
    isMale: {
      type: nonNullableGraphQLBoolean,
      description: 'Gender',
    },
    yearOfBirth: {
      type: nonNullableGraphQLInt,
      description: 'Year Of Birth',
    },
    user: {
      type: userObjectType,
      description: 'User',
      resolve: async (source: Profile, _: unknown, context: PrismaContextInterface) =>
        await context.prisma.user.findUnique({ where: { id: source.userId } }),
    },
    userId: {
      type: UUIDType,
      description: 'User ID',
    },
    memberType: {
      type: memberObjectType,
      description: 'Member Type',
      resolve: async (source: Profile, _: unknown, context: PrismaContextInterface) =>
        await context.loaders.profileLoader.load(source.memberTypeId),
    },
    memberTypeId: {
      type: memberTypeIdEnum,
      description: 'Member ID Type',
    },
  }),
});
/*
type Profile {
  id: UUID!
  isMale: Boolean!
  yearOfBirth: Int!
  memberType: MemberType!
}*/

export default profileObjectType;
