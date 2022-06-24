import { useState, useEffect } from 'react';
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
      />
      <UserInput
        inputId="lastNameInput"
        content="Enter your last name: "
        type="text"
      />
      <UserInput
        inputId="emailInput"
        content="Enter your e-mail: "
        type="email"
      />
      <UserInput
        inputId="passwordInput"
        content="Enter your password: "
        type="password"
      />
      <FormButton content="Submit" onClick={() => console.log('hi')} />
    </FormContainer>
  );
}
