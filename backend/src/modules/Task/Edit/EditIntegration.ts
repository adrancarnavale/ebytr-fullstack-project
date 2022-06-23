import { EditImplementation } from './EditImplementation';
import { EditUseCase } from './EditUseCase';
import { EditController } from './EditController';

const imp = new EditImplementation();

const useCase = new EditUseCase(imp);

export const edit = new EditController(useCase);
