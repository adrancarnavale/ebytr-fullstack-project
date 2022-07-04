import { UserLoginResponse } from '@DTOs';
import { IUser } from '@entities';
import { LoginRepository } from './LoginRepository';

export class LoginUseCase {
  constructor(private implementation: LoginRepository) {}

  async execute(userInfos: IUser): Promise<UserLoginResponse> {
    const userLoginResponse = await this.implementation.login(userInfos);

    return userLoginResponse;
  }
}
