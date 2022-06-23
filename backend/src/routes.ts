import express from 'express';
import { userRoutes } from './modules/User/userRoutes';
import { taskRoutes } from './modules/Task/taskRoutes';

export const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/task', taskRoutes);
