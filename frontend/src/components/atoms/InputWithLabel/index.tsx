import { Input } from '../Input';
import { InputWithLabel } from './types';

export function InputWithLabel({
  inputId,
  content,
  className,
  inputType,
}: InputWithLabel) {
  return (
    <label htmlFor={inputId}>
      {content}
      <Input className={className} type={inputType} inputId={inputId} />
    </label>
  );
}
