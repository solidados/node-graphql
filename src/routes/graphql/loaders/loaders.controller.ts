import { PrismaClient } from '@prisma/client';
import * as loaders from './index.js';

const loadersController = (prisma: PrismaClient) => ({
  userLoader: loaders.userLoader(prisma),
  profileLoader: loaders.profileLoader(prisma),
  postLoader: loaders.postLoader(prisma),
  memberTypeLoader: loaders.memberTypeLoader(prisma),
  subscribedToUserLoader: loaders.subscribedToUserLoader(prisma),
  userSubscribedToLoader: loaders.userSubscribedToLoader(prisma),
});

export default loadersController;
