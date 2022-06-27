import { PrismaClient } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../../../entities/IUser';
import { CustomError } from '../../../utils/CustomError';
import { LoginRepository } from './LoginRepository';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../utils/token/generateToken';
import { UserLoginResponse } from '../../../DTOs/UserLoginResponseDTO';

const prisma = new PrismaClient();

export class LoginImplementation implements LoginRepository {
  async login(userInfos: IUser): Promise<UserLoginResponse> {
    const { email, password: passRequest } = userInfos;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new CustomError(StatusCodes.NOT_FOUND, 'User not found');

    const { password } = user;

    const isValid = bcrypt.compareSync(passRequest, password);

    if (!isValid)
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        'invalid email or password'
      );

    const token = generateToken(userInfos);
    const id = user.id;

    const userLoginResponse = {
      token,
      id,
    };

    return userLoginResponse;
  }
}
