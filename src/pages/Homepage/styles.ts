import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 20px 0;
`;

export const LogoCompany = styled.img`
  position: absolute;
  opacity: 0.3;
  @media(min-width: 1200px){
    top: 20px;
    right: 20px;
    opacity: 1;
  }
`;