import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;

  width: 100%;

  gap: 0.5rem;
  padding: 2rem 3rem;
`;

export const EmptyText = styled.span`
  color: rgba(109, 106, 104, 0.52);

  text-align: center;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 570;
  line-height: 140%;
  letter-spacing: -0.01563rem;
`;

export const NavigateButton = styled.button`
  margin-left: 1rem;
  padding: 0.37rem 1rem;
  border: none;
  border-radius: 0.825rem;

  font-size: 1em;
  font-weight: 600;
  background-color: #dadada;

  cursor: pointer;

  &:hover {
    background-color: #cacaca;
  }
`;
