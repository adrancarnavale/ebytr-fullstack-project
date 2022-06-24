import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ITask } from '../../../entities/ITask';
import { CustomError } from '../../../utils/CustomError';
import { CreateRepository } from './CreateRepository';

export class CreateImplementation implements CreateRepository {
  async create(task: ITask, userEmail: string): Promise<ITask> {
    const prisma = new PrismaClient();

    const { title, description, status } = task;

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

    const createdTask = await prisma.task.create({
      data: {
        authorId,
        title,
        description,
        status,
      },
    });

    const { id } = createdTask;

    const serializedTask = {
      id,
      title,
      description,
      status,
    };

    return serializedTask;
  }
}
