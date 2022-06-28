import { IInputProps } from '../../types';

export function Input({
  className,
  type,
  inputId,
  formRegister,
  formHook,
}: IInputProps) {
  return (
    <input
      id={inputId}
      className={className}
      type={type}
      {...formHook?.register(formRegister)}
    />
  );
}
