import { prisma } from '@db';
import { StatusCodes } from 'http-status-codes';
import { ITask } from '@entities';
import { CustomError } from '@utils';
import { EditRepository } from './EditRepository';

export class EditImplementation implements EditRepository {
  async edit(task: ITask): Promise<ITask> {
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
