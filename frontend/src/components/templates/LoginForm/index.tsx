import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { TextLink } from '../../molecules/TextLink';
import { UserInput } from '../../molecules/UserInput';

export function LoginForm() {
  return (
    <FormContainer>
      <UserInput
        inputId="emailInput"
        content="Enter your e-mail: "
        type="email"
        formRegister="email"
      />
      <UserInput
        inputId="passwordInput"
        content="Enter your password: "
        type="password"
        formRegister="password"
      />
      <FormButton content="Log In" />
      <TextLink target="/register" content="Don't have an account? Sign In!" />
    </FormContainer>
  );
}
