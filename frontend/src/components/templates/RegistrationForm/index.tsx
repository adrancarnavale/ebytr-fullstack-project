import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { UserInput } from '../../molecules/UserInput';

export function RegistrationForm() {
  return (
    <FormContainer>
      <UserInput
        inputId="firstNameInput"
        content="Enter your first name: "
        type="text"
        formRegister="firstName"
      />
      <UserInput
        inputId="lastNameInput"
        content="Enter your last name: "
        type="text"
        formRegister="lastName"
      />
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
      <FormButton content="Submit" />
    </FormContainer>
  );
}
