import { IButtonProps } from './types';

export function Button({ content, onClick, className, name }: IButtonProps) {
  return (
    <button name={name} type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
