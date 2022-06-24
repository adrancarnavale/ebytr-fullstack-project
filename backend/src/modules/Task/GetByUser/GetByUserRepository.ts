import { SortOrder } from '../../../@types';
import { ITask } from '../../../entities/ITask';

export interface GetByUserRepository {
  getByUser(userId: string, sortOrder: SortOrder): Promise<ITask[]>;
}
