declare namespace Express {
  export interface Request {
    userLoginData: {
      email: string;
      password: string;
    };
  }
}
