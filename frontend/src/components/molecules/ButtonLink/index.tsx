import { Link } from 'react-router-dom';
import { IButtonProps } from './types';
import { DefaultButton } from '../DefaultButton';

export function ButtonLink({ target, content }: IButtonProps) {
  return (
    <Link
      to={target as string}
      className="w-full focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none flex flex-row justify-center"
    >
      <DefaultButton content={content} />
    </Link>
  );
}
