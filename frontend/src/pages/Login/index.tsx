import { LoginHeader } from '../../components/organisms/LoginHeader';
import { LoginForm } from '../../components/organisms/LoginForm';
import { Container } from '../../components/atoms/Container';
import { PageContainer } from '../../components/molecules/PageContainer';

export function Login() {
  return (
    <PageContainer>
      <LoginHeader />
      <LoginForm />
    </PageContainer>
  );
}
