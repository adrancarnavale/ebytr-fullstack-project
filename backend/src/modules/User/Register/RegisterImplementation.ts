import { IUser } from '@entities';
import { RegisterRepository } from './RegisterRepository';
import { prisma } from '@db';
import { CustomError, GenerateToken } from '@utils';
import bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';

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
