import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { title } from 'process';
import { CustomError } from '../../../utils/CustomError';
import { CreateUseCase } from './CreateUseCase';

export class CreateController {
  constructor(private useCase: CreateUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { title, description, status, userLoginData: { email: userEmail, password } } = request.body;

      const task = {
        title,
        description,
        status
      }

      const createdTask = await this.useCase.execute(task, userEmail);

      return response
        .status(StatusCodes.CREATED)
        .json({ message: createdTask });
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
