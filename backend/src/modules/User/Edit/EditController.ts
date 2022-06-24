import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Target } from '../../../@types';
import { CustomError } from '../../../utils/CustomError';
import { EditUseCase } from './EditUseCase';

export class EditController {
  constructor(private useCase: EditUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const {
        query: { target },
        userLoginData,
        body: newUserInfos,
      } = request;

      const user = {
        ...newUserInfos,
        ...userLoginData,
      };

      const edittedUser = await this.useCase.execute(user, target as Target);

      return response.status(StatusCodes.CREATED).json(edittedUser);
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
