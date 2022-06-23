import express from 'express';
import { register } from './Register/RegisterIntegration';
import { login } from './Login/LoginIntegration';
import { registerValidation } from '../../middlewares/User/Register/registerValidation';
import { loginValidation } from '../../middlewares/User/Login/loginValidation';

export const userRoutes = express.Router();

userRoutes
  .post('/register', registerValidation, async (request, response) =>
    register.handle(request, response)
  )
  .post('/login', loginValidation, async (request, response) =>
    login.handle(request, response)
  );
