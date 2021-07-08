import React, { useContext } from 'react';

import { Container, LogoCompany } from './styles';

import HeaderApplication from '../../components/HeaderApplication';
import ProgileCard from '../../components/ProfileCard';
import ButtonComponent from '../../components/ButtonComponent';

import HybridCompany from '../../assets/images/logo.png'
import { PeopleContextAPI } from 'Context/PeoplesContextAPI';

const Homepage: React.FC = () => {

  const { peopleActive, getRandomPeople } = useContext(PeopleContextAPI);

  return(
    <Container
      key={peopleActive.id}
    >
      <LogoCompany 
        src={HybridCompany}
      />
      <HeaderApplication 
        name={peopleActive.name}
        avatar={peopleActive.avatar}
      />
      <ProgileCard 
        aboutme={peopleActive.about}
        name={peopleActive.name}
        phone={peopleActive.phone}
        email={peopleActive.email}
      />
      <ButtonComponent 
        title='Next'
        onClick={() => getRandomPeople()}
      />
    </Container>
  );
}

export default Homepage;