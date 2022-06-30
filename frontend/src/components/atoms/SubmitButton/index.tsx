import { IButtonProps } from './types';

export function SubmitButton({ content, onClick, className }: IButtonProps) {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
