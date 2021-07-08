import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 300px;
  border: 2px solid var(--grenn);
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 6px;
  cursor: pointer;
  transition: .3s;
  font-size: 1.4rem;
  &:hover{
    background: var(--grenn);
  }
`;
