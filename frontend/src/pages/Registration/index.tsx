import { PageContainer } from '../../components/molecules/PageContainer';
import { RegistrationForm } from '../../components/organisms/RegistrationForm';
import { RegistrationHeader } from '../../components/organisms/RegistrationHeader';

export function Registration() {
  return (
    <PageContainer>
      <RegistrationHeader />
      <RegistrationForm />
    </PageContainer>
  );
}
