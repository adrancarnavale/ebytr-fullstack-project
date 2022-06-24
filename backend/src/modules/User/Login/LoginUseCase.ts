import { IUser } from '../../../entities/IUser';
import { LoginRepository } from './LoginRepository';

export class LoginUseCase {
  constructor(private implementation: LoginRepository) {}

  async execute(user: IUser): Promise<string> {
    const token = await this.implementation.login(user);

    return token;
  }
}
