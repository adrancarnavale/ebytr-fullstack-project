import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RegisterUsecase } from './RegisterUsecase';

export class RegisterController {
  constructor(private useCase: RegisterUsecase) {}

  async handle(request: Request, response: Response) {
    const { body: user } = request;

    const token = await this.useCase.execute(user);

    return response.status(StatusCodes.CREATED).json({ token });
  }
}
