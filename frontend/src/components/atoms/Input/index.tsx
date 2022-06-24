import { Input } from './types';

export function Input({ className, type, inputId }: Input) {
  return <input id={inputId} className={className} type={type} />;
}
