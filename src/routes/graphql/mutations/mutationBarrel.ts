import { GraphQLObjectType } from 'graphql';
import createUser from '../../graphql/mutations/userMutations/create/create.user.js';
import patchUser from '../../graphql/mutations/userMutations/patch/patch.user.js';
import deleteUser from '../../graphql/mutations/userMutations/delete/delete.user.js';
import createProfile from '../../graphql/mutations/profileMutations/create/create.profile.js';
import patchProfile from '../../graphql/mutations/profileMutations/patch/patch.profile.js';
import deleteProfile from '../../graphql/mutations/profileMutations/delete/delete.profile.js';
import createPost from '../../graphql/mutations/postMutations/create/create.post.js';
import patchPost from '../../graphql/mutations/postMutations/patch/patch.post.js';
import deletePost from '../../graphql/mutations/postMutations/delete/delete.post.js';
import unsubscribe from '../../graphql/mutations/subscriptions/unsubscribe.js';
import subscribe from '../../graphql/mutations/subscriptions/subscribe.js';

const mutationFields = {
  createUser,
  patchUser,
  deleteUser,
  createProfile,
  patchProfile,
  deleteProfile,
  createPost,
  patchPost,
  deletePost,
  subscribe,
  unsubscribe,
};

const mutationTypes: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: mutationFields,
});

export default mutationTypes;
