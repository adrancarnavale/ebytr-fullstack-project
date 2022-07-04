import { IUser } from '@entities';

export interface RegisterRepository {
  register(user: IUser): Promise<string>;
}
