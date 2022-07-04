import { prisma } from '@db';
import { SortOrder } from '@types';
import { ITask } from '@entities';
import { GetByUserRepository } from './GetByUserRepository';

export class GetByUserImplementation implements GetByUserRepository {
  async getByUser(userId: string, sortOrder: SortOrder): Promise<ITask[]> {
    const tasks = await prisma.task.findMany({
      where: {
        authorId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        createdAt: true,
      },
      orderBy: [
        {
          [sortOrder]: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });

    return tasks;
  }
}
