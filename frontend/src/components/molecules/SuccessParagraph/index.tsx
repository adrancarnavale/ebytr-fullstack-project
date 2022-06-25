import { Paragraph } from '../../atoms/Paragraph';
import { IParagraph } from '../../types';

export function SuccessParagraph({ content }: IParagraph) {
  return (
    <Paragraph
      className="text-sm text-nord-aurora-4 text-center mt-[-1.5vh]"
      content={content}
    />
  );
}
