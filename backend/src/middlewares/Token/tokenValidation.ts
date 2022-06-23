import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from '../../utils/token/verifyToken';

export function tokenValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { authorization: token } = request.headers;

    if (!token)
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Token not found' });

    verifyToken(token);

    return next();
  } catch (error) {
    return response
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Invalid or expired token' });
  }
}
