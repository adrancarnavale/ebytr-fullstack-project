import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { SortOrder } from '../../../@types';
import { CustomError } from '../../../utils/CustomError';
import { GetByUserUseCase } from './GetByUserUseCase';

export class GetByUserController {
  constructor(private useCase: GetByUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id: userId } = request.params;
      const { sortOrder } = request.query;
      const sortedTasks = await this.useCase.execute(
        userId,
        sortOrder as SortOrder
      );

      return response.status(StatusCodes.OK).json(sortedTasks);
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json((error as CustomError).message);
    }
  }
}
