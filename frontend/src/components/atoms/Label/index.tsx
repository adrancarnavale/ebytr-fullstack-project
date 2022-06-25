import { ILabel } from '../../types';

export function Label({ inputId, children, content, className }: ILabel) {
  return (
    <label className={className} htmlFor={inputId}>
      {content}
      <div>{children}</div>
    </label>
  );
}
