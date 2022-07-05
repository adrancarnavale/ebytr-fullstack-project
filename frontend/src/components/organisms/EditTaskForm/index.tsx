import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@atoms';
import {
  DefaultButton,
  ErrorParagraph,
  FormButton,
  FormContainer,
  RadioGroupElement,
  UserInput,
} from '@molecules';
import {
  resetErrorsFromTask,
  saveTaskBeingEditted,
  useAppSelector,
  useAppDispatch,
} from '@app';

export function EditTaskContent() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { taskId } = useParams();

  useEffect(() => {
    dispatch(saveTaskBeingEditted(taskId));
    dispatch(resetErrorsFromTask());
  }, []);

  const {
    task: {
      error: { message },
    },
  } = useAppSelector((state) => state);

  return (
    <FormContainer eventTrigger="editTask">
      <UserInput
        content="Title: "
        type="text"
        inputId="createTaskTitle"
        formRegister="title"
      />
      {message.includes('title') && <ErrorParagraph content={message} />}
      <UserInput
        content="Description: "
        type="text"
        inputId="createTaskDescription"
        formRegister="description"
      />
      {message.includes('description') && <ErrorParagraph content={message} />}
      <RadioGroupElement formRegister="status" />

      {message.includes('status') && <ErrorParagraph content={message} />}

      <Container className="flex flex-row justify-center items-center w-full">
        <FormButton onClick={() => navigate('/tasks')} content="Submit" />
        <DefaultButton content="Back" onClick={() => navigate('/tasks')} />
      </Container>
    </FormContainer>
  );
}
