import { IButton } from '../../types';

export function SubmitButton({ content, onClick, className }: IButton) {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
