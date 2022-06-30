import { Label } from '../../atoms/Label';
import { Input } from '../../atoms/Input';
import { IInputProps } from './types';
import { Container } from '../../atoms/Container';

export function UserInput({
  inputId,
  content,
  type,
  formRegister,
  formHook,
}: IInputProps) {
  return (
    <Container className="w-full mb-[2vh]">
      <Label
        className="text-nord-light-1 text-xl w-full"
        inputId={inputId}
        content={content as string}
      >
        <Input
          formRegister={formRegister}
          formHook={formHook}
          inputId={inputId}
          type={type}
          className="bg-nord-light-1 rounded-md shadow-sm w-full text-nord-dark-1 pl-[1vw] h-[4.5vh] focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none"
        />
      </Label>
    </Container>
  );
}
