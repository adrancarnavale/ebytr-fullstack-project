import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { ITask } from '../../../entities/ITask';
import { CustomError } from '../../../utils/CustomError';
import { EditRepository } from './EditRepository';

export class EditImplementation implements EditRepository {
  async edit(task: ITask): Promise<ITask> {
    const prisma = new PrismaClient();
    const { id, title, description, status } = task;

    const target = await prisma.task.findUnique({
      where: { id },
    });

    if (!target) throw new CustomError(StatusCodes.NOT_FOUND, 'Task not found');

    const edittedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        status,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
      },
    });

    return edittedTask;
  }
}
