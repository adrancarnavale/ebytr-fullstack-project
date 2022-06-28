import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IInput {
  className?: string;
  type: string;
  inputId: string;
  content?: string;
  formHook?: UseFormReturn<IUserInfos, object>;
  formRegister: keyof IUserInfos;
}

export interface IButton {
  target?: string;
  content: string;
  onClick?: () => void;
  className?: string;
}

export interface IHeader {
  content: string;
  className: string;
}

export interface IImage {
  source: string;
  className: string;
  alt: string;
}

export interface ILabel {
  inputId: string;
  content: string;
  children: ReactNode;
  className: string;
}

export interface ILinkTo {
  target: string;
  children: ReactNode;
}

export interface IParagraph {
  className?: string;
  content: string;
}

export interface IFormContainer {
  children: ReactNode;
  eventTrigger: 'login' | 'register';
}

export interface IUserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IHeaderTitle {
  content: string;
}

export interface ITextLink {
  target: string;
  content: string;
}

export interface IDisclosureProps {
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

export interface ITaskContent {
  elements: ITask[];
}
