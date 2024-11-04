import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const memberTypeLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const memberTypes = await prisma.memberType.findMany({
      where: {
        id: { in: IDs as Array<string> },
      },
    });
    return IDs.map((id) =>
      memberTypes.find((memberType): boolean => memberType.id === id),
    );
  });
};
