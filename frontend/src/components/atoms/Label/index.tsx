import { ILabelProps } from './types';

export function Label({ inputId, children, content, className }: ILabelProps) {
  return (
    <label className={className} htmlFor={inputId}>
      {content}
      <div>{children}</div>
    </label>
  );
}
