import { IHeader } from './types';

export function Header({ content, className }: IHeader) {
  return <h1 className={className}>{content}</h1>;
}
