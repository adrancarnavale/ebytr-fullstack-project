import { UserLoginResponse } from '@DTOs/UserLoginResponseDTO';
import { IUser } from '@entities/IUser';
import { LoginRepository } from './LoginRepository';

export class LoginUseCase {
  constructor(private implementation: LoginRepository) {}

  async execute(userInfos: IUser): Promise<UserLoginResponse> {
    const userLoginResponse = await this.implementation.login(userInfos);

    return userLoginResponse;
  }
}
