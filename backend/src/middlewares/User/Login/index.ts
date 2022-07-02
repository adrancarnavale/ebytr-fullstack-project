import { loginSchema } from './loginSchema';
import { LoginValidation } from './loginValidation';

export const loginValidation = new LoginValidation(loginSchema);
