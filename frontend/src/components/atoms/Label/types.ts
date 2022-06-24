import { ReactNode } from 'react';

export interface ILabel {
  inputId: string;
  content: string;
  children: ReactNode;
  className: string;
}
