import { Paragraph } from '../../atoms/Paragraph';
import { IParagraph } from '../../types';

export function ErrorParagraph({ content }: IParagraph) {
  return (
    <Paragraph
      className="text-sm text-nord-aurora-1 text-center mt-[-1.5vh]"
      content={content}
    />
  );
}
