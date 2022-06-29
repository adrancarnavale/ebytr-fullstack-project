import { BracketsCurly } from 'phosphor-react';
import { Container } from '../../atoms/Container';
import { Header } from '../../atoms/Header';
import { IHeaderTitleProps } from '../../types';

export function HeaderTitle({ content }: IHeaderTitleProps) {
  return (
    <Container className="mt-4 mb-4 w-[90vw] max-w-[600px] flex flex-row justify-center items-center">
      <BracketsCurly className="text-nord-light-1 w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11" />
      <Header
        className="ml-2 text-3xl md:text-4xl lg:text-5xl text-nord-light-1 font-semibold"
        content={content}
      />
    </Container>
  );
}
