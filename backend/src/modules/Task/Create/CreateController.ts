import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateUseCase } from './CreateUseCase';

export class CreateController {
  constructor(private useCase: CreateUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      status,
      userLoginData: { email: userEmail, password },
    } = request.body;

    const task = {
      title,
      description,
      status,
    };

    const createdTask = await this.useCase.execute(task, userEmail);

    return response.status(StatusCodes.CREATED).json(createdTask);
  }
}
