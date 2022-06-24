import { LoginFormButton } from '../../molecules/LoginFormButton';
import { UserEmailInput } from '../../organisms/UserEmailInput';
import { UserPasswordInput } from '../../organisms/UserPasswordInput';

export function LoginForm() {
  return (
    <div className="relative flex m-auto mt-8 flex-col justify-center content-center gap-4 bg-nord-dark-2 p-8 rounded-md w-[90vw] max-w-lg h-[27vh] max-h-lg">
      <UserEmailInput />
      <UserPasswordInput />
      <LoginFormButton />
    </div>
  );
}
