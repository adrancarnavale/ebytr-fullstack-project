import { BracketsCurly } from 'phosphor-react';
import { Header } from '../../atoms/Header';
import { IHeaderTitle } from './types';

export function HeaderTitle({ content }: IHeaderTitle) {
  return (
    <header className="m-auto mt-4 w-[90vw] max-w-[600px] flex flex-row justify-center items-center">
      <BracketsCurly size={50} className="text-nord-light-1" />
      <Header
        className="ml-2 text-5xl text-nord-light-1 font-semibold flex justify-center align-middle"
        content={content}
      />
    </header>
  );
}
