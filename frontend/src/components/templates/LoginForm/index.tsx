import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { TextLink } from '../../molecules/TextLink';
import { UserInput } from '../../molecules/UserInput';
import { resetRegistrationStatus } from '../../../app/reducers/registerSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { SuccessParagraph } from '../../molecules/SuccessParagraph';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';

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
  }, []);

  return (
    <FormContainer eventTrigger="login">
      {isLogged && <Navigate to="/tasks" />}
      <UserInput
        inputId="emailInput"
        content="Enter your e-mail: "
        type="email"
        formRegister="email"
      />
      {message.includes('email address') && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        inputId="passwordInput"
        content="Enter your password: "
        type="password"
        formRegister="password"
      />
      {message.includes('password') && <ErrorParagraph content={message} />}
      <FormButton content="Log In" />
      {isRegistered && (
        <SuccessParagraph content="You have been successfully registered" />
      )}
      {message.includes('not found') && <ErrorParagraph content={message} />}
      {!isRegistered && (
        <TextLink
          target="/register"
          content="Don't have an account? Sign In!"
        />
      )}
    </FormContainer>
  );
}
