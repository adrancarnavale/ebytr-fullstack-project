import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '@utils';
import { DeleteUseCase } from './DeleteUseCase';

export class DeleteController {
  constructor(private useCase: DeleteUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id: taskId } = request.params;
      await this.useCase.execute(taskId);

      return response.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json({ message: (error as CustomError).message });
    }
  }
}
