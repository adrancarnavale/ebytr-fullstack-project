import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { taskSchema } from './taskSchema';

export function taskValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { title, description, status } = request.body;

  const { error } = taskSchema.validate({ title, description, status });

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
