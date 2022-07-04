import { ITask } from '@entities/ITask';

export interface EditRepository {
  edit(task: ITask): Promise<ITask>;
}
