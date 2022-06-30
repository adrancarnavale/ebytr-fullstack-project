import { IContainerProps } from './types';

export function Container({ children, className }: IContainerProps) {
  return <div className={className}>{children}</div>;
}
