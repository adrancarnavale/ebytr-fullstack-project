import { Link } from 'react-router-dom';
import { IButtonProps } from '../../types';
import { DefaultButton } from '../DefaultButton';

export function ButtonLink({ target, content }: IButtonProps) {
  return (
    <Link to={target as string} className="w-[40%]">
      <DefaultButton content={content} />
    </Link>
  );
}
