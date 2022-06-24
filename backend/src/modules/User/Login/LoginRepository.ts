import { IUser } from '../../../entities/IUser';

export interface LoginRepository {
  login(user: IUser): Promise<string>;
}
