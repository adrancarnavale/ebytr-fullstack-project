import { NextFunction, Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { loginSchema } from './loginSchema';

export function loginValidation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body: userInfos } = request;

  console.log(userInfos);

  const { error } = loginSchema.validate(userInfos);

  if (!error) return next();

  return response
    .status(StatusCodes.BAD_REQUEST)
    .json({ message: error.message });
}
