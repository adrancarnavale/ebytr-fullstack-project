import { Container } from '../../atoms/Container';
import { IContainerProps } from '../../types';

export function PageContainer({ children }: IContainerProps) {
  return (
    <Container className="flex flex-col justify-center items-center">
      {children}
    </Container>
  );
}
