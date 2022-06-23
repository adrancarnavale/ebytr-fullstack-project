import { ITask } from '../../../entities/ITask';

export interface GetByUserRepository {
  getByUser(userId: string, order: string): Promise<ITask[]>;
}
