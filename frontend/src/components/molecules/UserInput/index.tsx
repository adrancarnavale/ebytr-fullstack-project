import { Label } from '../../atoms/Label';
import { Input } from '../../atoms/Input';
import { IInput } from '../../types';

export function UserInput({
  inputId,
  content,
  type,
  formRegister,
  formHook,
}: IInput) {
  return (
    <div className="w-full mb-[2vh]">
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
          className="bg-nord-light-1 border-2 border-nord-dark-2 rounded-md shadow-sm w-full text-nord-dark-1 pl-[1vw] h-[4.5vh]"
        />
      </Label>
    </div>
  );
}
