import { Container } from '../../atoms/Container';
import { IContainerProps } from './types';

export function ContentContainer({ children }: IContainerProps) {
  return (
    <Container className="flex m-auto mt-2 flex-col justify-center items-center bg-nord-dark-2 p-[3vh] rounded-md w-[90vw] max-w-lg mb-2">
      {children}
    </Container>
  );
}
