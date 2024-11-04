import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const userSubscribedToLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const users = await prisma.user.findMany({
      where: {
        subscribedToUser: {
          some: {
            subscriberId: { in: IDs as Array<string> },
          },
        },
      },
    });
    return IDs.map(() => users);
  });
};
