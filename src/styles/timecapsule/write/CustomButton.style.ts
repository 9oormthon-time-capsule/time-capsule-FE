import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  background-color: ${({ color }) => color || '#222222'};
`;
