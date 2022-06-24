import { ReactNode } from 'react';

export interface IFormContainer {
  children: ReactNode;
}

export interface IUserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
