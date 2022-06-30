export interface ErrorData {
  status: number;
  message: string;
}

export interface LoginInfos {
  email: string;
  password: string;
}

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

export interface LoginReturnInfos {
  token: string;
  id: string;
}

export interface UserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
