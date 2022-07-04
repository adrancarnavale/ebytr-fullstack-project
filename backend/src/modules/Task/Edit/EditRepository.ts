import { ITask } from '@entities';

export interface EditRepository {
  edit(task: ITask): Promise<ITask>;
}
