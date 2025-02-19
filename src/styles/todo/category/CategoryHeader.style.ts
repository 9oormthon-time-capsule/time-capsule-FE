import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

export const BackSection = styled.div`
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TitleSection = styled.div`
  font-size: 23px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

interface ButtonSectionProps {
  isPlus: boolean;
}

export const ButtonSection = styled.div<ButtonSectionProps>`
  font-size: ${({ isPlus }) => (isPlus ? '40px' : '20px')};
  font-weight: ${({ isPlus }) => (isPlus ? '400' : '600')};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: ${({ isPlus }) => (isPlus ? '35px' : '18px')};
  }

  @media (max-width: 480px) {
    font-size: ${({ isPlus }) => (isPlus ? '30px' : '16px')};
  }
`;
