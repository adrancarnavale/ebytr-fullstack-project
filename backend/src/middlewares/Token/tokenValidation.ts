import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { VerifyToken } from '@utils';

export class TokenValidation {
  async validation(request: Request, response: Response, next: NextFunction) {
    try {
      const {
        headers: { authorization: token },
      } = request;

      if (!token)
        return response
          .status(StatusCodes.NOT_FOUND)
          .json({ message: 'Token not found' });

      const {
        data: { email, password },
      } = await new VerifyToken().verify(token);

      request.body.userLoginData = {
        email,
        password,
      };

      return next();
    } catch (error) {
      return response
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Invalid or expired token' });
    }
  }
}
