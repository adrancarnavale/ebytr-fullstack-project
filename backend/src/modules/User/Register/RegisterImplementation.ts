import { IUser } from '../../../entities/IUser';
import { RegisterRepository } from './RegisterRepository';
import { prisma } from '../../../db/prisma';
import { CustomError } from '../../../utils/CustomError';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { GenerateToken } from '../../../utils/token/generateToken';

export class RegisterImplementation implements RegisterRepository {
  async register(user: IUser): Promise<string> {
    const { firstName, lastName, email, password } = user;

    const cryptedPass = bcrypt.hashSync(password);

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
          'Internal server error, UserRegisterImplementation'
        );
      })
      .finally(async () => {
        await prisma.$disconnect();
      });

    const generatedToken = await new GenerateToken().generate(user);

    return generatedToken;
  }
}
