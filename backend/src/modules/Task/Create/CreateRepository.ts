import { ITask } from '@entities/ITask';

export interface CreateRepository {
  create(task: ITask, userEmail: string): Promise<ITask>;
}
