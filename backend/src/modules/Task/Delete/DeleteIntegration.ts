import { DeleteImplementation } from './DeleteImplementation';
import { DeleteUseCase } from './DeleteUseCase';
import { DeleteController } from './DeleteController';

const imp = new DeleteImplementation();
const useCase = new DeleteUseCase(imp);

export const destroy = new DeleteController(useCase);
