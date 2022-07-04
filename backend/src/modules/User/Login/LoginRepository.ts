import { UserLoginResponse } from '@DTOs';
import { IUser } from '@entities';

export interface LoginRepository {
  login(userInfos: IUser): Promise<UserLoginResponse>;
}
