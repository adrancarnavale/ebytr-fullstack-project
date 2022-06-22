import express from 'express';
import { userRoutes } from './modules/User/routes';

export const routes = express.Router();

routes.use('/user', userRoutes);
