import { IButtonProps } from '../../types';

export function Button({ content, onClick, className }: IButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
