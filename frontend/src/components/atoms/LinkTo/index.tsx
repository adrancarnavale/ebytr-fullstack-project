import { Link } from 'react-router-dom';
import { ILinkProps } from '../../types';

export function LinkTo({ target, children }: ILinkProps) {
  return <Link to={target}>{children}</Link>;
}
