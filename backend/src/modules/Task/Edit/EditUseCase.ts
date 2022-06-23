import { ITask } from '../../../entities/ITask';
import { EditRepository } from './EditRepository';

export class EditUseCase {
  constructor(private implementation: EditRepository) {}

  async execute(taskId: ITask): Promise<ITask> {
    const task = await this.implementation.edit(taskId);

    return task;
  }
}
