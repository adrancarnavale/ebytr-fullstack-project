import { Container } from '../../atoms/Container';
import { Header } from '../../atoms/Header';

export function LoadingElement() {
  return (
    <Container>
      <Header content="Loading" className="bg-nord-light-1" />
    </Container>
  );
}
