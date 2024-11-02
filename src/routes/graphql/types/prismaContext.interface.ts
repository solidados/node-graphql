import DataLoader from 'dataloader';
import { MemberType, Post, Profile, User, Prisma, PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library.js';

interface PrismaLoadersInterface {
  userLoader: DataLoader<string, User>;
  profileLoader: DataLoader<string, Profile>;
  postLoader: DataLoader<string, Array<Post>>;
  memberTypeLoader: DataLoader<string, MemberType>;
  userSubscribedToLoader: DataLoader<string, Array<User>>;
  subscribedToUserLoader: DataLoader<string, Array<User>>;
}

export interface PrismaContextInterface {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  loaders: PrismaLoadersInterface;
}
