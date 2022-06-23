import express from 'express';
import { userRoutes } from './modules/User/userRoutes';

export const routes = express.Router();

routes.use('/user', userRoutes);
