import { IHeader } from '../../types';

export function Header({ content, className }: IHeader) {
  return (
    <div>
      <h1 className={className}>{content}</h1>
    </div>
  );
}
