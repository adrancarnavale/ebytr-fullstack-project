import { PrismaClient } from '@prisma/client';
import { ITask } from '../../../entities/ITask';
import { GetByUserRepository } from './GetByUserRepository';

export class GetByUserImplementation implements GetByUserRepository {
  async getByUser(userId: string): Promise<ITask[]> {
    const prisma = new PrismaClient();
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
    });

    return tasks;
  }
}
