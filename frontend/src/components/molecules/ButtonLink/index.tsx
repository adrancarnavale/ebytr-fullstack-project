import { Link } from 'react-router-dom';
import { IButton } from '../../types';
import { DefaultButton } from '../DefaultButton';

export function ButtonLink({ target, content }: IButton) {
  return (
    <Link to={target as string} className="w-[40%]">
      <DefaultButton content={content} />
    </Link>
  );
}
