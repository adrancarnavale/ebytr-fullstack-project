import { UseFormReturn } from 'react-hook-form';

export interface IInputProps {
  className?: string;
  type: string;
  inputId: string;
  content?: string;
  formHook?: UseFormReturn<IFormInfos, object>;
  formRegister: keyof IFormInfos;
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

export type TStatus = 'done' | 'pending' | 'in progress';
