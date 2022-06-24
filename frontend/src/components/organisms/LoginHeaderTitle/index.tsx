import { Header } from '../../atoms/Header';

export function LoginHeaderTitle() {
  return (
    <header>
      <Header
        className="text-5xl text-nord-light-1 font-semibold flex justify-center align-middle"
        content="Ebytr Task manager"
      />
    </header>
  );
}
