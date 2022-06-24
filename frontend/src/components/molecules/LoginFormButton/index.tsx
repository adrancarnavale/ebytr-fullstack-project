import { Button } from '../../atoms/Button';

export function LoginFormButton() {
  return (
    <Button
      content="Login"
      className="bg-nord-dark-4 h-9 m-auto w-[15vw] rounded-md text-nord-light-1 hover:bg-nord-dark-3 border-2 shadow-sm border-nord-dark-1 hover:border-nord-dark-5 hover:shadow-lg"
    />
  );
}
