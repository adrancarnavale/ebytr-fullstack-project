import { ReactNode } from 'react';

export interface IFormContainerProps {
  children: ReactNode;
  eventTrigger: 'login' | 'register' | 'createTask' | 'editTask';
}

export interface IFormInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: TStatus;
  createdAt: string;
}

export interface ITask {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: TStatus;
  createdAt: string;
}

export type TStatus = 'done' | 'pending' | 'in progress';
