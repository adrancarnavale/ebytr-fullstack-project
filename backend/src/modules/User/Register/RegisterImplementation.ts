import { IUser } from '../../../entities/IUser';
import { RegisterRepository } from './RegisterRepository';
import { PrismaClient } from '@prisma/client';
import { CustomError } from '../../../utils/CustomError';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

export class RegisterImplementation implements RegisterRepository {
  async register(userInfos: IUser): Promise<string> {
    const { firstName, lastName, email, password } = userInfos;

    const prisma = new PrismaClient();

    var cryptedPass = bcrypt.hashSync(password);

    await prisma.user
      .create({
        data: {
          firstName,
          lastName,
          email,
          password: cryptedPass,
        },
      })
      .catch(({ message }) => {
        if (message.includes('users_email_key'))
          throw new CustomError(StatusCodes.CONFLICT, 'User already exists');

        throw new CustomError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          'Internal server error, RegisterImplementation - line 20'
        );
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    return 'User successfully registered!';
  }
}
