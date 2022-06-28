import { Container } from '../../atoms/Container';
import { IContainerProps } from '../../types';

export function ContentContainer({ children }: IContainerProps) {
  return (
    <Container className="flex m-auto mt-[4vh] flex-col justify-center items-center bg-nord-dark-2 p-[4vh] rounded-md w-[90vw] max-w-lg max-h-screen">
      {children}
    </Container>
  );
}
