import { prisma } from '@db';
import { CustomError } from '@utils';
import { DeleteRepository } from './DeleteRepository';

export class DeleteImplementation implements DeleteRepository {
  async delete(taskId: string): Promise<void> {
    const targetTask = await prisma.task.findUnique({ where: { id: taskId } });

    if (!targetTask) throw new CustomError(404, 'Task not found');

    await prisma.task.delete({ where: { id: taskId } });

    return;
  }
}
