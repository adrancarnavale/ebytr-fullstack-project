import { IUser } from '../../../entities/IUser';
import { LoginRepository } from './LoginRepository';

export class LoginUseCase {
  constructor(private implementation: LoginRepository) {}

  async execute(userInfos: IUser): Promise<string> {
    const token = await this.implementation.login(userInfos);

    return token;
  }
}
