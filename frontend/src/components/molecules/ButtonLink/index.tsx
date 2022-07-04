import { Link } from 'react-router-dom';
import { DefaultButton } from '@molecules';
import { IButtonProps } from './types';

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
