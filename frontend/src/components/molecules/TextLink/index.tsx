import { Container } from '../../atoms/Container';
import { LinkTo } from '../../atoms/LinkTo';
import { Paragraph } from '../../atoms/Paragraph';
import { ITextLinkProps } from '../../types';

export function TextLink({ target, content }: ITextLinkProps) {
  return (
    <Container>
      <LinkTo target={target}>
        <Paragraph
          className="text-[0.80rem] text-nord-light-1 font-thin underline underline-offset-1"
          content={content}
        />
      </LinkTo>
    </Container>
  );
}
