import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '../../../utils/CustomError';
import { GetByUserUseCase } from './GetByUserUseCase';

export class GetByUserController {
  constructor(private useCase: GetByUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id: userId } = request.params;
      const tasks = await this.useCase.execute(userId);

      return response.status(StatusCodes.OK).json(tasks);
    } catch (error) {
      return response
        .status((error as CustomError).status)
        .json((error as CustomError).message);
    }
  }
}
