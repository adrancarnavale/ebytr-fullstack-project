import { Container, LinkTo, Paragraph } from '@atoms';
import { ITextLinkProps } from './types';

export function TextLink({ target, content }: ITextLinkProps) {
  return (
    <Container>
      <LinkTo target={target}>
        <Paragraph
          className="text-[0.80rem] text-nord-light-1 font-thin underline underline-offset-1 focus:ring-2"
          content={content}
        />
      </LinkTo>
    </Container>
  );
}
