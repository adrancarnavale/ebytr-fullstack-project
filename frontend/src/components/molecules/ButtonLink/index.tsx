import { Link } from 'react-router-dom';
import { IButtonProps } from '../../types';
import { DefaultButton } from '../DefaultButton';

export function ButtonLink({ target, content }: IButtonProps) {
  return (
    <Link
      to={target as string}
      className="w-[40%] focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none"
    >
      <DefaultButton content={content} />
    </Link>
  );
}
