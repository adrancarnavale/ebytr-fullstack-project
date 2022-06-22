import express from 'express';
import { register } from './Register/RegisterIntegration';
import { login } from './Login/LoginIntegration';

export const userRoutes = express.Router();

userRoutes
  .post('/register', async (request, response) =>
    register.handle(request, response)
  )
  .post('/login', async (request, response) => login.handle(request, response));
