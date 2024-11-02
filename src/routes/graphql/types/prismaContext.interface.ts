import DataLoader from 'dataloader';
import { MemberType, Post, Profile, User, Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library.js';

interface PrismaLoadersInterface {
  memberTypeLoader: DataLoader<string, MemberType>;
  postTypeLoader: DataLoader<string, Array<Post>>;
  profileLoader: DataLoader<string, Profile>;
  userLoader: DataLoader<string, User>;
  subscribedToUserLoader: DataLoader<string, Array<User>>;
  userSubscribedToLoader: DataLoader<string, Array<User>>;
}

export interface PrismaContextInterface {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  loaders: PrismaLoadersInterface;
}
