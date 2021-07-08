import { IProfileCard } from './data';

import { 
  Container,
  DataProfile,
  ContainerField,
  LabelField,
  ValueField,
  DivisionLine,
  AboutProfile,
  TextAbout
} from './styles';

const ProfileCard = ({
  aboutme,
  email,
  name,
  phone
}: IProfileCard) => {
  return (
    <Container>
      <DataProfile>

        <ContainerField>
          <LabelField>Name:</LabelField>
          <ValueField>{name}</ValueField>
        </ContainerField>

        <ContainerField>
          <LabelField>E-mail:</LabelField>
          <ValueField>{email}</ValueField>
        </ContainerField>

        <ContainerField>
          <LabelField>Telefone:</LabelField>
          <ValueField>{phone}</ValueField>
        </ContainerField>

      </DataProfile>

      <DivisionLine />

      <AboutProfile>
        <TextAbout>
          {aboutme}
        </TextAbout>
      </AboutProfile>
    </Container>
  );
}

export default ProfileCard;