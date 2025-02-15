import styled from 'styled-components';

export const CapsuleBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: beige;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
`;

export const BottomSection = styled.div`
  display: flex;
  font-size: 26px;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 6px;
  }

  span {
    font-size: 32px;
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  cursor: pointer;
`;
