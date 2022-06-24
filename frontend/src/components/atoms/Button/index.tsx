import { IButton } from './types';

export function Button({ content, onClick, className }: IButton) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
