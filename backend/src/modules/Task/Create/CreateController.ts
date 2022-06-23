import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../../utils/CustomError';
import { CreateUseCase } from './CreateUseCase';

export class CreateController {
  constructor(private useCase: CreateUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { email, title, description, status } = request.body;

      const userEmail = email;

      const taskInfos = {
        title,
        description,
        status,
      };

      const task = await this.useCase.execute(taskInfos, userEmail);

      return response.status(StatusCodes.CREATED).json({ message: task });
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
