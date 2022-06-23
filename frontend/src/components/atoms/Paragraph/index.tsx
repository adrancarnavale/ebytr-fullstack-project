import { Paragraph } from './types';

export function Paragraph({ className, content }: Paragraph) {
  return <p className={className}>{content}</p>;
}
