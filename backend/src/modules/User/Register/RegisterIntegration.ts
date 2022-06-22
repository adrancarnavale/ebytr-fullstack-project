import { RegisterImplementation } from './RegisterImplementation';
import { RegisterUsecase } from './RegisterUsecase';
import { RegisterController } from './RegisterController';

const imp = new RegisterImplementation();
const useCase = new RegisterUsecase(imp);

export const register = new RegisterController(useCase);
