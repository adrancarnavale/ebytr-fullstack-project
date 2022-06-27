export interface registerState {
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
