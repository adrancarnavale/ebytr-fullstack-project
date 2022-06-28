import { RegistrationForm } from '../../components/organisms/RegistrationForm';
import { RegistrationHeader } from '../../components/organisms/RegistrationHeader';

export function Registration() {
  return (
    <div className="flex flex-col justify-center content-center">
      <RegistrationHeader />
      <RegistrationForm />
    </div>
  );
}
