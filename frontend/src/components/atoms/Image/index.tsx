import { Image } from './types';

export function Image({ source, className, alt }: Image) {
  return <img src={source} className={className} alt={alt} />;
}
