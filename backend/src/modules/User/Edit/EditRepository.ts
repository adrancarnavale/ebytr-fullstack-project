import { Target } from '../../../@types';
import { IUser } from '../../../entities/IUser';

export interface EditRepository {
  edit(userInfo: IUser, target: Target): Promise<IUser>;
}
