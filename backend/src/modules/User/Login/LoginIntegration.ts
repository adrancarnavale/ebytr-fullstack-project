import { LoginImplementation } from './LoginImplementation';
import { LoginUseCase } from './LoginUseCase';
import { LoginController } from './LoginController';

const imp = new LoginImplementation();
const useCase = new LoginUseCase(imp);

export const login = new LoginController(useCase);
