import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { taskSchema } from './taskSchema';

export function taskValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: task } = request;

  const { error } = taskSchema.validate(task);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
