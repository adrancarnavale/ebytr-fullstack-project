import { IUser } from '../../../entities/IUser';
import { RegisterRepository } from './RegisterRepository';

export class RegisterUsecase {
  constructor(private implementation: RegisterRepository) {}

  async execute(userInfos: IUser): Promise<string> {
    const message = await this.implementation.register(userInfos);

    return message;
  }
}
