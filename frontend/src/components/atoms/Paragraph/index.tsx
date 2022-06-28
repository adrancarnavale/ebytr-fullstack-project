import { IParagraphProps } from '../../types';

export function Paragraph({ className, content }: IParagraphProps) {
  return <p className={className}>{content}</p>;
}
