import { Link } from 'react-router-dom';
import { ILinkProps } from '../../types';

export function LinkTo({ target, children, className }: ILinkProps) {
  return (
    <Link className={className} to={target}>
      {children}
    </Link>
  );
}
