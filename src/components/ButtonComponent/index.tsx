import { IButtonCompoenet } from './data';
import { Container } from './styles';

const ButtonComponent = ({onClick, title}: IButtonCompoenet) => {
  return(
    <Container
      onClick={onClick}
    >
      {title}
    </Container>
  );
}

export default ButtonComponent;