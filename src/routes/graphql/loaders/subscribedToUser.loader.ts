import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const subscribedToUserLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const users = await prisma.user.findMany({
      where: {
        userSubscribedTo: {
          some: {
            authorId: { in: IDs as Array<string> },
          },
        },
      },
    });
    return IDs.map(() => users);
  });
};
