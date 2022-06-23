import { ITask } from '../../../entities/ITask';
import { CreateRepository } from './CreateRepository';

export class CreateUseCase {
  constructor(private implementation: CreateRepository) {}

  async execute(taskInfos: ITask, userEmail: string): Promise<ITask> {
    const task = await this.implementation.create(taskInfos, userEmail);

    return task;
  }
}
