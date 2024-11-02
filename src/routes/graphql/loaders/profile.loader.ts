import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const profileLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const profiles = await prisma.profile.findMany({
      where: {
        userId: { in: IDs as Array<string> },
      },
    });
    return IDs.map((id) => profiles.find((profile): boolean => profile.userId === id));
  });
};
