import express from 'express';
import { tokenValidation } from '../../middlewares/Token/tokenValidation';
import { getByUser } from './GetByUser/GetByUserIntegration';

export const taskRoutes = express.Router();

taskRoutes.get('/:id', tokenValidation, async (request, response) =>
  getByUser.handle(request, response)
);
