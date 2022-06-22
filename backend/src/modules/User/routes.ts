import express from 'express';
import { register } from './Register/RegisterIntegration';

export const userRoutes = express.Router();

userRoutes.post('/register', async (request, response) =>
  register.handle(request, response)
);
