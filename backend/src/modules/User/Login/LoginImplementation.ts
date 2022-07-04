import { prisma } from '@db';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '@entities';
import { CustomError, GenerateToken } from '@utils';
import { LoginRepository } from './LoginRepository';
import bcrypt from 'bcryptjs';
import { UserLoginResponse } from '@DTOs';

export class LoginImplementation implements LoginRepository {
  async login(userInfos: IUser): Promise<UserLoginResponse> {
    const { email, password: passRequest } = userInfos;

    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser)
      throw new CustomError(StatusCodes.NOT_FOUND, 'unregistered user');

    const { password } = foundUser;

    const isValid = bcrypt.compareSync(passRequest, password);

    if (!isValid)
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        'invalid email or password'
      );

    const token = await new GenerateToken().generate(userInfos);
    const id = foundUser.id;

    const userLoginResponse = {
      token,
      id,
    };

    return userLoginResponse;
  }
}
