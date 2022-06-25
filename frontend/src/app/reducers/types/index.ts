export interface registerState {
  token: string;
  isFetching: boolean;
  isRegistered: boolean;
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

export interface ErrorData {
  status: number;
  message: string;
}
