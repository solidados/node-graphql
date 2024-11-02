import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const userLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const users = await prisma.user.findMany({
      where: {
        id: { in: IDs as Array<string> },
      },
      include: { subscribedToUser: true, userSubscribedTo: true },
    });
    return IDs.map((id) => users.find((user): boolean => user.id === id));
  });
};
