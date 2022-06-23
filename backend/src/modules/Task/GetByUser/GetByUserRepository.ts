import { ITask } from '../../../entities/ITask';

export interface GetByUserRepository {
  getByUser(userId: string): Promise<ITask[]>;
}
