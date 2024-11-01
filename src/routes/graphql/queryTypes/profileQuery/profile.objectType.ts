import { GraphQLBoolean, GraphQLInt, GraphQLObjectType } from 'graphql/type/index.js';
import { UUIDType } from '../../types/uuid.js';

const profileObjectType = new GraphQLObjectType({
  name: 'Profile',
  description: 'Profile Type',
  fields: () => ({
    id: {
      type: UUIDType,
      description: 'Profile ID',
    },
    isMale: {
      type: GraphQLBoolean,
      description: 'Gender',
    },
    yearOfBirth: {
      type: GraphQLInt,
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
