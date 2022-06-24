import { SortOrder } from '../../../@types';
import { ITask } from '../../../entities/ITask';
import { GetByUserRepository } from './GetByUserRepository';

export class GetByUserUseCase {
  constructor(private implementation: GetByUserRepository) {}

  async execute(userId: string, order: SortOrder): Promise<ITask[]> {
    const tasks = await this.implementation.getByUser(userId, order);

    return tasks;
  }
}
