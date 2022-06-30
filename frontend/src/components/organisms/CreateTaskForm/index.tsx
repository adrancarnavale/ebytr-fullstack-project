import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { Container } from '../../atoms/Container';
import { DefaultButton } from '../../molecules/DefaultButton';
import { ErrorParagraph } from '../../molecules/ErrorParagraph';
import { FormButton } from '../../molecules/FormButton';
import { FormContainer } from '../../molecules/FormContainer';
import { RadioGroupElement } from '../../molecules/RadioGroup';
import { UserInput } from '../../molecules/UserInput';

export function CreateTaskForm() {
  const navigate = useNavigate();

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
