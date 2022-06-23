import { GetByUserImplementation } from './GetByUserImplementation';
import { GetByUserUseCase } from './GetByUserUseCase';
import { GetByUserController } from './GetByUserController';

const imp = new GetByUserImplementation();
const useCase = new GetByUserUseCase(imp);

export const getByUser = new GetByUserController(useCase);
