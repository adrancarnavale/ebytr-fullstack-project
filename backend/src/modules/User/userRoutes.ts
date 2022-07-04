import express from 'express';
import { register, login } from '@modules';
import { registerValidation, loginValidation } from '@middlewares';

export const userRoutes = express.Router();

userRoutes
  .post(
    '/register',
    (request, response, next) =>
      registerValidation.validation(request, response, next),
    async (request, response) => register.handle(request, response)
  )
  .post(
    '/login',
    (request, response, next) =>
      loginValidation.validation(request, response, next),
    async (request, response) => login.handle(request, response)
  );
