import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../../utils/CustomError';
import { RegisterUsecase } from './RegisterUsecase';

export class RegisterController {
  constructor(private useCase: RegisterUsecase) {}

  async handle(request: Request, response: Response) {
    try {
      const { body: user } = request;

      const token = await this.useCase.execute(user);

      return response.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
