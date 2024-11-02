import { GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '@/routes/graphql/types/uuid.js';
import {
  nonNullableGraphQLBoolean,
  nonNullableGraphQLInt,
} from '@/routes/graphql/types/nonNullableFields.type.js';

const profileObjectType = new GraphQLObjectType({
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
    // TODO: add MemberType
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
