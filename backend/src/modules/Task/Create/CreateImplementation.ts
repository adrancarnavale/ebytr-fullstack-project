import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ITask } from '../../../entities/ITask';
import { CustomError } from '../../../utils/CustomError';
import { CreateRepository } from './CreateRepository';

export class CreateImplementation implements CreateRepository {
  async create(taskInfos: ITask, userEmail: string): Promise<ITask> {
    const prisma = new PrismaClient();

    const { title, description, status } = taskInfos;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user)
      throw new CustomError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Internal server error'
      );

    const { id: authorId } = user;

    const task = await prisma.task.create({
      data: {
        authorId,
        title,
        description,
        status,
      },
    });

    const { id } = task;

    const createdTask = {
      id,
      title,
      description,
      status,
    };

    return createdTask;
  }
}
