import { NextFunction, Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema } from 'joi';
import { IUser } from '../../../entities/IUser';
import { loginSchema } from './loginSchema';

export function loginValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: user } = request;

  const { error } = loginSchema.validate(user);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
