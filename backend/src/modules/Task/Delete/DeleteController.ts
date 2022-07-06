import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DeleteUseCase } from './DeleteUseCase';

export class DeleteController {
  constructor(private useCase: DeleteUseCase) {}

  async handle(request: Request, response: Response) {
    const { id: taskId } = request.params;
    await this.useCase.execute(taskId);

    return response.status(StatusCodes.NO_CONTENT).end();
  }
}
