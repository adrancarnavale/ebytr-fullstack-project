import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from '../../utils/token/verifyToken';

export function tokenValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
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
    } = verifyToken(token);

    request.userLoginData = {
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
