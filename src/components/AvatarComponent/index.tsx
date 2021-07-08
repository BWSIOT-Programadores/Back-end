import { IAvatarComponent } from './data';

import { 
  Container,
  AvatarImage
} from './styles';

import AvatarDefault from '../../assets/images/default.jpg';

const AvatarComponent = ({url = AvatarDefault} : IAvatarComponent) => {
  return (
    <Container>
      <AvatarImage 
        src={url}
      />
    </Container>
  );
}

export default AvatarComponent;