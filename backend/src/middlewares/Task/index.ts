import { taskSchema } from './taskSchema';
import { TaskValidation } from './taskValidation';

export const taskValidation = new TaskValidation(taskSchema);
