import { Paragraph } from '@atoms';
import { IParagraphProps } from './types';

export function SuccessParagraph({ content }: IParagraphProps) {
  return (
    <Paragraph
      className="text-sm text-nord-aurora-4 text-center mt-[0vh]"
      content={content}
    />
  );
}
