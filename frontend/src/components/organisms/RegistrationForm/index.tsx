import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { UserInput } from '../../molecules/UserInput';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';
import { ButtonLink } from '../../molecules/ButtonLink';
import { resetErrorsFromRegister } from '../../../app/reducers/registerSlice';
import * as errors from './constants';

export function RegistrationForm() {
  const dispatch = useAppDispatch();

  const {
    register: {
      error: { message },
      isRegistered,
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(resetErrorsFromRegister());
  }, []);

  return (
    <FormContainer eventTrigger="register">
      {isRegistered && <Navigate to="/" />}
      <UserInput
        inputId="firstNameInput"
        content="Enter your first name: "
        type="text"
        formRegister="firstName"
      />
      {(message === errors.FIRST_NAME_EMPTY ||
        message === errors.FIRST_NAME_MIN) && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        inputId="lastNameInput"
        content="Enter your last name: "
        type="text"
        formRegister="lastName"
      />
      {(message === errors.LAST_NAME_EMPTY ||
        message === errors.LAST_NAME_MIN) && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        inputId="emailInput"
        content="Enter your e-mail: "
        type="text"
        formRegister="email"
      />
      {(message === errors.EMAIL_EMPTY || message === errors.INVALID_EMAIL) && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        inputId="passwordInput"
        content="Enter your password: "
        type="password"
        formRegister="password"
      />
      {(message === errors.PASS_EMPTY || message === errors.INVALID_PASS) && (
        <ErrorParagraph content={message} />
      )}
      <FormButton content="Submit" />
      <ButtonLink target="/" content="Back" />
    </FormContainer>
  );
}
