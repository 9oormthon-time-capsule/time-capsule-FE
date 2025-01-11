import styled from 'styled-components';

export const WriteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
  font-weight: bold;
  color: rgb(252, 229, 194);
  letter-spacing: 5px;
  font-family: 'Arial', sans-serif;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem;
  color: rgb(251, 233, 206);
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const EmotionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #dcdcdc;
  border-radius: 5px;
  width: 60%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;

interface EmotionLabelProps {
  isSelected: boolean;
}

export const EmotionLabel = styled.label<EmotionLabelProps>`
  font-size: 1.8rem;
  margin: 5px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#5C271F' : '')};
  transition: background-color 0.3s;
  border-radius: 50%;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
