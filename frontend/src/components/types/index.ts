import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IInputProps {
  className?: string;
  type: string;
  inputId: string;
  content?: string;
  formHook?: UseFormReturn<IFormInfos, object>;
  formRegister: keyof IFormInfos;
}

export interface IRadioGroupProps {
  formHook?: UseFormReturn<ITask, object>;
  formRegister: keyof IFormInfos;
}

export interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export interface IButtonProps {
  target?: string;
  content: string;
  onClick?: () => void;
  className?: string;
}

export interface IHeaderProps {
  content: string;
  className: string;
}

export interface IImageProps {
  source: string;
  className: string;
  alt: string;
}

export interface ILabelProps {
  inputId: string;
  content: string;
  children: ReactNode;
  className: string;
}

export interface ILinkProps {
  target: string;
  children: ReactNode;
  className?: string;
}

export interface IParagraphProps {
  className?: string;
  content: string;
}

export interface IFormContainerProps {
  children: ReactNode;
  eventTrigger: 'login' | 'register' | 'createTask';
}

export interface IUserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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

export interface IHeaderTitleProps {
  content: string;
}

export interface ITextLinkProps {
  target: string;
  content: string;
}

export interface IDisclosureProps {
  taskId: string;
  title: string;
  content: string;
  status: 'done' | 'pending' | 'in progress';
  created: string;
}

export type TStatus = 'done' | 'pending' | 'in progress';

export interface ITask {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: TStatus;
  createdAt: string;
}

export interface ITaskContentProps {
  elements: ITask[];
}
