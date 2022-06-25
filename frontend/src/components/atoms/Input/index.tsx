import { IInput } from '../../../types';

export function Input({
  className,
  type,
  inputId,
  formRegister,
  formHook,
}: IInput) {
  return (
    <input
      id={inputId}
      className={className}
      type={type}
      {...formHook?.register(formRegister)}
    />
  );
}
