import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin: 1rem 2rem;
  width: 88%;
  @media(max-width: 980px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media(max-width: 980px){
    justify-content: center;
  }
`;

export const NameProfile = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  white-space: nowrap;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media(max-width: 980px){
    font-size: 2rem;
    max-width: 320px;
  }
`;