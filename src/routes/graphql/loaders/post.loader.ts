import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';

export const postLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (IDs) => {
    const posts = await prisma.post.findMany({
      where: {
        authorId: { in: IDs as Array<string> },
      },
    });
    return IDs.map((id) => posts.find((post): boolean => post.authorId === id));
  });
};
