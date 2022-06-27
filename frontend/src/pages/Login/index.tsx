import { LoginHeader } from '../../components/templates/LoginHeader';
import { LoginForm } from '../../components/templates/LoginForm';

export function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
