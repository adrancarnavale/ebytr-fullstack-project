import { UseFormReturn } from 'react-hook-form';

export interface IRadioGroupProps {
  formHook?: UseFormReturn<ITask, object>;
  formRegister: keyof IFormInfos;
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
