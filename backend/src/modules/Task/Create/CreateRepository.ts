import { ITask } from '@entities';

export interface CreateRepository {
  create(task: ITask, userEmail: string): Promise<ITask>;
}
