import { Link } from 'react-router-dom';
import { Paragraph } from '../Paragraph';
import { LinkWithParagraph } from './types';

export function LinkWithParagraph({
  target,
  className,
  content,
}: LinkWithParagraph) {
  return (
    <Link to={target}>
      <Paragraph className={className} content={content} />
    </Link>
  );
}
