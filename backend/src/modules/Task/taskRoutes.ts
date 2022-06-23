import express from 'express';
import { getByUser } from './GetByUser/GetByUserIntegration';

export const taskRoutes = express.Router();

taskRoutes.get('/:id', async (request, response) =>
  getByUser.handle(request, response)
);
