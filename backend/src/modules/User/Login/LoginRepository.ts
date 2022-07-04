import { UserLoginResponse } from '@DTOs/UserLoginResponseDTO';
import { IUser } from '@entities/IUser';

export interface LoginRepository {
  login(userInfos: IUser): Promise<UserLoginResponse>;
}
