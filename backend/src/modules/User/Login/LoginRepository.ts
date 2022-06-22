import { IUser } from '../../../entities/IUser';

export interface LoginRepository {
  login(userInfos: IUser): Promise<string>;
}
