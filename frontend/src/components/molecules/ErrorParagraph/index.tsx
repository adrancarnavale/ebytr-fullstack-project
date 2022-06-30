import { Paragraph } from '../../atoms/Paragraph';
import { IParagraphProps } from './types';

export function ErrorParagraph({ content }: IParagraphProps) {
  return (
    <Paragraph
      className="text-sm text-nord-aurora-1 text-center mt-[0vh]"
      content={content}
    />
  );
}
