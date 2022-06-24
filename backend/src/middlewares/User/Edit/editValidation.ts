import { NextFunction, Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { editSchema } from './editSchema';

export function editValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: user } = request;

  const { error } = editSchema.validate(user);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
