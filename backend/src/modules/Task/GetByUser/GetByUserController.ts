import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SortOrder } from '@types';
import { GetByUserUseCase } from './GetByUserUseCase';

export class GetByUserController {
  constructor(private useCase: GetByUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { id: userId } = request.params;

    const { order } = request.query;
    const tasks = await this.useCase.execute(userId, order as SortOrder);

    return response.status(StatusCodes.OK).json(tasks);
  }
}
