import { SortOrder } from '@types';
import { ITask } from '@entities';

export interface GetByUserRepository {
  getByUser(userId: string, sortOrder: SortOrder): Promise<ITask[]>;
}
