import AvatarComponent  from '../AvatarComponent';
import { IHeaderAplication } from './data';

import { 
  Container,
  ContainerInfo,
  NameProfile
} from './styles';

const HeaderApplication = ({avatar, name}: IHeaderAplication) => {
  return (
    <Container>

      <AvatarComponent 
        url={avatar}
      />

      <ContainerInfo>
        <NameProfile>
          {name}
        </NameProfile>
      </ContainerInfo>
      
    </Container>
  );
}

export default HeaderApplication;