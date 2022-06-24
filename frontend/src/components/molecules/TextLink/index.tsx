import { LinkTo } from '../../atoms/LinkTo';
import { Paragraph } from '../../atoms/Paragraph';
import { ITextLink } from './types';

export function TextLink({ target, content }: ITextLink) {
  return (
    <div>
      <LinkTo target={target}>
        <Paragraph
          className="text-[0.80rem] text-nord-light-1 font-thin underline underline-offset-1"
          content={content}
        />
      </LinkTo>
    </div>
  );
}
