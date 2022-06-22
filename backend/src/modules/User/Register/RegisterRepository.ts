import { IUser } from '../../../entities/IUser';

export interface RegisterRepository {
  register(userInfos: IUser): Promise<string>;
}
