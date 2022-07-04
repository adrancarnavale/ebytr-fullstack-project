import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@atoms';
import {
  DefaultButton,
  ErrorParagraph,
  FormButton,
  FormContainer,
  RadioGroupElement,
  UserInput,
} from '@molecules';
import { resetErrorsFromTask, useAppSelector, useAppDispatch } from '@app';
import * as errors from './constants';

export function CreateTaskForm() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetErrorsFromTask());
  }, []);

  const {
    task: {
      error: { message },
    },
  } = useAppSelector((state) => state);

  return (
    <FormContainer eventTrigger="createTask">
      <UserInput
        content="Title: "
        type="text"
        inputId="createTaskTitle"
        formRegister="title"
      />
      {(message === errors.EMPTY_TITLE || message === errors.TITLE_MIN) && (
        <ErrorParagraph content={message} />
      )}
      <UserInput
        content="Description: "
        type="text"
        inputId="createTaskDescription"
        formRegister="description"
      />
      <RadioGroupElement formRegister="status" />

      {message === errors.EMPTY_STATUS && <ErrorParagraph content={message} />}

      <Container className="flex flex-row justify-center items-center w-full">
        <FormButton content="Submit" />
        <DefaultButton content="Back" onClick={() => navigate('/tasks')} />
      </Container>
    </FormContainer>
  );
}
