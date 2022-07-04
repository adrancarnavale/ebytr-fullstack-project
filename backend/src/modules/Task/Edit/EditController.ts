import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '@utils/CustomError';
import { EditUseCase } from './EditUseCase';

export class EditController {
  constructor(private useCase: EditUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { body: task } = request;

      const edittedTask = await this.useCase.execute(task);

      return response.status(StatusCodes.CREATED).json(edittedTask);
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
