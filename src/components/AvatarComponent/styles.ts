import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  background: var(--white);
  padding: 5px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  border-radius: 6px;
`;