import { IParagraph } from '../../../types';

export function Paragraph({ className, content }: IParagraph) {
  return <p className={className}>{content}</p>;
}
