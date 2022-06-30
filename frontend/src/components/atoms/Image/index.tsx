import { IImageProps } from './types';

export function Image({ source, className, alt }: IImageProps) {
  return <img src={source} className={className} alt={alt} />;
}
