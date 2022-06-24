import { Target } from '../../../@types';
import { IUser } from '../../../entities/IUser';
import { EditRepository } from './EditRepository';

export class EditUseCase {
  constructor(private implementation: EditRepository) {}

  async execute(userInfo: IUser, target: Target): Promise<IUser> {
    const updatedUser = await this.implementation.edit(userInfo, target);

    return updatedUser;
  }
}
