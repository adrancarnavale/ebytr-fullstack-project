import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  resetErrorsFromTask,
  saveTaskBeingEditted,
} from '../../../app/reducers/taskSlice';
import { Container } from '../../atoms/Container';
import { DefaultButton } from '../../molecules/DefaultButton';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { RadioGroupElement } from '../../molecules/RadioGroup';
import { UserInput } from '../../molecules/UserInput';

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
        <FormButton content="Submit" />
        <DefaultButton content="Back" onClick={() => navigate('/tasks')} />
      </Container>
    </FormContainer>
  );
}
