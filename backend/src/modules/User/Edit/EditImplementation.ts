import { PrismaClient } from '@prisma/client';
import { IUser } from '../../../entities/IUser';
import { EditRepository } from './EditRepository';
import bcrypt from 'bcryptjs';
import { CustomError } from '../../../utils/CustomError';
import { Target } from '../../../@types';
import { StatusCodes } from 'http-status-codes';

export class EditImplementation implements EditRepository {
  async edit(user: IUser, target: Target): Promise<IUser> {
    const prisma = new PrismaClient();
    const { email, password } = user;

    const targetUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!targetUser)
      throw new CustomError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Internal server error'
      );

    const targetPassword = bcrypt.compare(targetUser.password, password);

    if (!targetPassword)
      throw new CustomError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Internal server error'
      );

    let newInformation = user[target as keyof IUser];

    if (!newInformation)
      throw new CustomError(
        StatusCodes.BAD_REQUEST,
        'Please provide a information corresponding to the right field'
      );

    if (target === 'password') {
      newInformation = bcrypt.hashSync(newInformation as string);
    }

    const edittedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        [target]: newInformation,
      },
    });

    return edittedUser;
  }
}
