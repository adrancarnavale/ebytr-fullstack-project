import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EditUseCase } from './EditUseCase';

export class EditController {
  constructor(private useCase: EditUseCase) {}

  async handle(request: Request, response: Response) {
    const { body: task } = request;

    const edittedTask = await this.useCase.execute(task);

    return response.status(StatusCodes.CREATED).json(edittedTask);
  }
}
