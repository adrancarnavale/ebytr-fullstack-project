import { CreateImplementation } from './CreateImplementation';
import { CreateUseCase } from './CreateUseCase';
import { CreateController } from './CreateController';

const imp = new CreateImplementation();
const useCase = new CreateUseCase(imp);

export const create = new CreateController(useCase);
