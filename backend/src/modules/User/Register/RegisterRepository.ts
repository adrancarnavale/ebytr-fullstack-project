import { IUser } from '../../../entities/IUser';

export interface RegisterRepository {
  register(user: IUser): Promise<string>;
}
