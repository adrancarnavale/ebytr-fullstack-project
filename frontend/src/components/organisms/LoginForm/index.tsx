import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { TextLink } from '../../molecules/TextLink';
import { UserInput } from '../../molecules/UserInput';
import {
  resetErrorsFromRegister,
  resetRegistrationStatus,
} from '../../../app/reducers/registerSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { SuccessParagraph } from '../../molecules/SuccessParagraph';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';
import * as errors from './constants';

export function LoginForm() {
  const ONE_AND_HALF_SECOND = 1500;

  const dispatch = useAppDispatch();

  const {
    register: {
      error: { message },
      isRegistered,
      isLogged,
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetRegistrationStatus());
    }, ONE_AND_HALF_SECOND);
    dispatch(resetErrorsFromRegister());
  }, []);

  return (
    <FormContainer eventTrigger="login">
      {isLogged && <Navigate to="/tasks" />}
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
      {(message === errors.EMAIL_EMPTY || message === errors.INVALID_EMAIL) && (
        <ErrorParagraph content={message} />
      )}
      <FormButton content="Log In" />
      {isRegistered && (
        <SuccessParagraph content="You have been successfully registered" />
      )}
      {message === errors.INVALID_DATA && <ErrorParagraph content={message} />}
      {!isRegistered && (
        <TextLink
          target="/register"
          content="Don't have an account? Sign In!"
        />
      )}
    </FormContainer>
  );
}
