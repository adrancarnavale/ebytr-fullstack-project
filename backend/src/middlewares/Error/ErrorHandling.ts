import { NextFunction, Request, Response } from 'express';
import { CustomError } from '@utils';
import { StatusCodes } from 'http-status-codes';

export class ErrorMiddleware {
  handle(
    error: CustomError,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) {
    if (error instanceof CustomError) {
      return response.status(error.status).json({ message: error.message });
    }

    return response
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}
