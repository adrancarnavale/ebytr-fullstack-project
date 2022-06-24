import { Link } from 'react-router-dom';
import { ILinkTo } from './types';

export function LinkTo({ target, children }: ILinkTo) {
  return <Link to={target}>{children}</Link>;
}
