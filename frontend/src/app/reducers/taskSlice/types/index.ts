export interface ErrorData {
  status: number;
  message: string;
}

export interface IGetTasksFromUserParams {
  userId: string;
  order: string;
}

export interface TaskState {
  taskBeingEditted: string;
  tasks: Task[];
  isCreated: boolean;
  areTasksLoaded: boolean;
  isFetching: boolean;
  order: 'createdAt' | 'status' | 'title';
  error: {
    message: string;
    status: number;
  };
}

export type TStatus = 'done' | 'pending' | 'in progress';

export interface Task {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: TStatus;
  createdAt: string;
}
