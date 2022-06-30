import { ISpanProps } from '../../types';

export function Span({ content, className }: ISpanProps) {
  return <span className={className}>{content}</span>;
}
