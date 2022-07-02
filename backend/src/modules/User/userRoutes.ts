import express from 'express';
import { register } from './Register/RegisterIntegration';
import { login } from './Login/LoginIntegration';
import { registerValidation } from '../../middlewares/User/Register';
import { loginValidation } from '../../middlewares/User/Login';

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
