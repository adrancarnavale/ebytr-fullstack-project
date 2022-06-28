import express from 'express';
import { taskValidation } from '../../middlewares/Task/Create/taskValidation';
import { tokenValidation } from '../../middlewares/Token/tokenValidation';
import { create } from './Create/CreateIntegration';
import { getByUser } from './GetByUser/GetByUserIntegration';
import { edit } from './Edit/EditIntegration';
import { destroy } from './Delete/DeleteIntegration';

export const taskRoutes = express.Router();

taskRoutes
  .get('/getAll/:id', tokenValidation, async (request, response) =>
    getByUser.handle(request, response)
  )
  .post('/create', tokenValidation, taskValidation, async (request, response) =>
    create.handle(request, response)
  )
  .patch('/edit', tokenValidation, taskValidation, async (request, response) =>
    edit.handle(request, response)
  )
  .delete('/destroy/:id', tokenValidation, async (request, response) =>
    destroy.handle(request, response)
  );
