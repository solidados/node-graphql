import { GraphQLObjectType } from 'graphql';
import createUser from '@/routes/graphql/mutations/userMutations/create/create.user.js';
import patchUser from '@/routes/graphql/mutations/userMutations/patch/patch.user.js';
import deleteUser from '@/routes/graphql/mutations/userMutations/delete/delete.user.js';
import createProfile from '@/routes/graphql/mutations/profileMutations/create/create.profile.js';
import patchProfile from '@/routes/graphql/mutations/profileMutations/patch/patch.profile.js';
import deleteProfile from '@/routes/graphql/mutations/profileMutations/delete/delete.profile.js';
import createPost from '@/routes/graphql/mutations/postMutations/create/create.post.js';
import patchPost from '@/routes/graphql/mutations/postMutations/patch/patch.post.js';
import deletePost from '@/routes/graphql/mutations/postMutations/delete/delete.post.js';
import unsubscribe from '@/routes/graphql/mutations/subscriptions/unsubscribe.js';
import subscribe from '@/routes/graphql/mutations/subscriptions/subscribe.js';

const mutationFields = {
  ...createUser,
  ...patchUser,
  ...deleteUser,
  ...createProfile,
  ...patchProfile,
  ...deleteProfile,
  ...createPost,
  ...patchPost,
  ...deletePost,
  ...subscribe,
  ...unsubscribe,
};

const mutationTypes = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => mutationFields,
});

export default mutationTypes;
