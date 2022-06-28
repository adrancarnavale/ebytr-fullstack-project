import { IHeaderProps } from '../../types';

export function Header({ content, className }: IHeaderProps) {
  return (
    <div>
      <h1 className={className}>{content}</h1>
    </div>
  );
}
