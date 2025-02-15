import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; 
  }
`;
