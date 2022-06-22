import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../../utils/CustomError';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor(private useCase: LoginUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { body: userInfos } = request;

      const token = await this.useCase.execute(userInfos);

      return response.status(StatusCodes.OK).json({ token });
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
