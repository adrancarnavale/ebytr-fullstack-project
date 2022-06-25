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
  className: string;
  content: string;
}

export interface IFormContainer {
  children: ReactNode;
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