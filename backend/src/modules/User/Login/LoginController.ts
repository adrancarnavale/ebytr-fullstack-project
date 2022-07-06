import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor(private useCase: LoginUseCase) {}

  async handle(request: Request, response: Response) {
    const { body: userInfos } = request;

    const userLoginResponse = await this.useCase.execute(userInfos);

    return response.status(StatusCodes.OK).json(userLoginResponse);
  }
}
