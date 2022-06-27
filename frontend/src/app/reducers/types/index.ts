export interface RegisterState {
  token: string;
  id: string;
  isFetching: boolean;
  isRegistered: boolean;
  isLogged: boolean;
  error: {
    message: string;
    status: number;
  };
}

export interface UserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInfos {
  email: string;
  password: string;
}

export interface LoginReturnInfos {
  token: string;
  id: string;
}

export interface ErrorData {
  status: number;
  message: string;
}

export interface TaskState {
  tasks: Task[];
  isFetching: boolean;
  order: 'createdAt' | 'status' | 'title';
  error: {
    message: string;
    status: number;
  };
}

export interface Task {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: string;
}
