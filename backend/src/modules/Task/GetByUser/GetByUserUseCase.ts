import { ITask } from '../../../entities/ITask';
import { GetByUserRepository } from './GetByUserRepository';

export class GetByUserUseCase {
  constructor(private implementation: GetByUserRepository) {}

  async execute(userId: string): Promise<ITask[]> {
    const tasks = await this.implementation.getByUser(userId);

    return tasks;
  }
}
