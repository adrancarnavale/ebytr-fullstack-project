import { Button } from './types';

export function Button({ content, onClick, className }: Button) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
