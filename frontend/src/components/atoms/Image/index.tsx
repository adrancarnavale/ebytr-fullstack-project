import { IImage } from '../../../types';

export function Image({ source, className, alt }: IImage) {
  return <img src={source} className={className} alt={alt} />;
}
