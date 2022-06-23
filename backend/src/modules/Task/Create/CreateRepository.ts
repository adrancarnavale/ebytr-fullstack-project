import { ITask } from '../../../entities/ITask';

export interface CreateRepository {
  create(taskInfos: ITask, userEmail: string): Promise<ITask>;
}
