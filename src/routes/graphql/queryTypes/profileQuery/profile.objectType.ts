import { Profile } from '@prisma/client';
import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '../../types/uuid.js';
import {
  nonNullableGraphQLBoolean,
  nonNullableGraphQLInt,
} from '../../types/nonNullableFields.type.js';
import { PrismaContextInterface } from '../../types/prismaContext.interface.js';
import userObjectType from '../userQuery/user.objectType.js';
import memberObjectType from '../memberQuery/member.objectType.js';
import { memberTypeIdEnum } from '../memberQuery/member.typeIdEnum.js';

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
