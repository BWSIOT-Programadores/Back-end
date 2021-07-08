import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: min(1180px, 99%);
  height: 540px;
  border: 2px solid var(--white);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  border-radius: 15px;
  padding: 20px;
  justify-content: space-around;
  color: black;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  @media(max-width: 700px){
    flex-direction: column;
    height: auto;
  }
  z-index: 1;
`;

export const DataProfile = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  flex: 1;
`;

export const ContainerField = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
`;

export const LabelField = styled.div`
  font-size: 1.3rem;
  min-height: 60px;
`;

export const ValueField = styled.div`
  font-size: 1.3rem;
  font-weight: lighter;
  margin-left: 3px;
`;

export const DivisionLine = styled.div`
  background: black;
  width: 1px;
  height: 90%;
  @media(max-width: 700px){
    width: 99%;
    height: 1px;
    margin: 1rem 0;
  }
`;

export const AboutProfile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const TextAbout = styled.div`
  font-size: 1.2rem;
  min-height: 60px;
  text-align: justify;
  font-weight: normal;
  padding: 30px;
  @media(max-width: 700px){
    margin: 1rem 0;
    padding: 0;
    text-align: center;
  }
`;