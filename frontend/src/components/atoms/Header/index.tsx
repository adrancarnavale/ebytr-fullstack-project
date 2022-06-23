import { Header } from './types';

export function Header({ content, className }: Header) {
  return <h1 className={className}>{content}</h1>;
}
