import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema } from 'joi';
import { ITask } from '../../entities/ITask';
import { taskSchema } from './taskSchema';

export function taskValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: task } = request;

  console.log(task);
  

  const { error } = taskSchema.validate(task);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
