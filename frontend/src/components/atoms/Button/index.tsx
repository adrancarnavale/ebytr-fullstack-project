import { IButton } from '../../types';

export function Button({ content, onClick, className }: IButton) {
  return (
    <button type="submit" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
