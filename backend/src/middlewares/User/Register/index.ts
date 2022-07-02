import { registerSchema } from './registerSchema';
import { RegisterValidation } from './registerValidation';

export const registerValidation = new RegisterValidation(registerSchema);
