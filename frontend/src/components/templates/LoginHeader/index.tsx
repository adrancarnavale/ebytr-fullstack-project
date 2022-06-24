import { BracketsCurly } from 'phosphor-react';
import { LoginHeaderTitle } from '../../organisms/LoginHeaderTitle';

export function LoginHeader() {
  return (
    <div className="m-auto mt-4 w-[90vw] max-w-[600px] flex flex-row justify-evenly items-center">
      <BracketsCurly size={50} className="text-nord-light-1" />
      <LoginHeaderTitle />
    </div>
  );
}
