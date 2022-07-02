import express, { NextFunction, Request, Response } from 'express';
import { taskValidation } from '../../middlewares/Task';
import { tokenValidation } from '../../middlewares/Token';
import { create } from './Create/CreateIntegration';
import { getByUser } from './GetByUser/GetByUserIntegration';
import { edit } from './Edit/EditIntegration';
import { destroy } from './Delete/DeleteIntegration';

export const taskRoutes = express.Router();

taskRoutes
  .get(
    '/getAll/:id',
    (request, response, next) =>
      tokenValidation.validation(request, response, next),
    async (request, response) => getByUser.handle(request, response)
  )
  .post(
    '/create',
    (request: Request, response: Response, next: NextFunction) =>
      tokenValidation.validation(request, response, next),
    (request, response, next) =>
      taskValidation.validation(request, response, next),
    async (request, response) => create.handle(request, response)
  )
  .patch(
    '/edit',
    (request: Request, response: Response, next: NextFunction) =>
      tokenValidation.validation(request, response, next),
    (request, response, next) =>
      taskValidation.validation(request, response, next),
    async (request, response) => edit.handle(request, response)
  )
  .delete(
    '/destroy/:id',
    (request, response, next) =>
      tokenValidation.validation(request, response, next),
    async (request, response) => destroy.handle(request, response)
  );
