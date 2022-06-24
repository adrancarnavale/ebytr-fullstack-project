import { NextFunction, Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { registerSchema } from './registerSchema';

export function registerValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: user } = request;

  const { error } = registerSchema.validate(user);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
