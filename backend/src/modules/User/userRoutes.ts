import express from 'express';
import { register } from './Register/RegisterIntegration';
import { login } from './Login/LoginIntegration';
import { editValidation } from '../../middlewares/User/Edit/editValidation';
import { registerValidation } from '../../middlewares/User/Register/registerValidation';
import { loginValidation } from '../../middlewares/User/Login/loginValidation';
import { edit } from './Edit/EditIntegration';
import { tokenValidation } from '../../middlewares/Token/tokenValidation';

export const userRoutes = express.Router();

userRoutes
  .post('/register', registerValidation, async (request, response) =>
    register.handle(request, response)
  )
  .post('/login', loginValidation, async (request, response) =>
    login.handle(request, response)
  )
  .patch('/edit', tokenValidation, editValidation, async (request, response) =>
    edit.handle(request, response)
  );
