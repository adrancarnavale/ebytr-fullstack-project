import { LoginHeader } from '../../components/organisms/LoginHeader';
import { LoginForm } from '../../components/organisms/LoginForm';

export function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
