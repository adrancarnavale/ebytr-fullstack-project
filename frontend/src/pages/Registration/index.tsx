import { RegistrationForm } from '../../components/templates/RegistrationForm';
import { RegistrationHeader } from '../../components/templates/RegistrationHeader';

export function Registration() {
  return (
    <div className="flex flex-col justify-center content-center">
      <RegistrationHeader />
      <RegistrationForm />
    </div>
  );
}
