import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt } from 'graphql';
import { memberTypeIdEnum } from '../../../queryTypes/memberQuery/member.typeIdEnum.js';

export const patchProfileObjectType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdateProfileInput',
  fields: () => ({
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    memberTypeId: { type: memberTypeIdEnum },
  }),
});
