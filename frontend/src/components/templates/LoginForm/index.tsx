import { useEffect } from 'react';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { TextLink } from '../../molecules/TextLink';
import { UserInput } from '../../molecules/UserInput';
import { resetRegistrationStatus } from '../../../app/reducers/registerSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { SuccessParagraph } from '../../molecules/SuccessParagraph';

export function LoginForm() {
  const ONE_AND_HALF_SECOND = 1500;

  const dispatch = useAppDispatch();

  const {
    register: { isRegistered },
  } = useAppSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetRegistrationStatus());
    }, ONE_AND_HALF_SECOND);
  }, []);

  return (
    <FormContainer>
      {isRegistered && (
        <SuccessParagraph content="You have been successfully registered" />
      )}
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
      {!isRegistered && (
        <TextLink
          target="/register"
          content="Don't have an account? Sign In!"
        />
      )}
    </FormContainer>
  );
}
