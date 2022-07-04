import { Container } from '@atoms';
import { IContainerProps } from './types';

export function PageContainer({ children }: IContainerProps) {
  return (
    <Container className="flex flex-col justify-center items-center">
      {children}
    </Container>
  );
}
