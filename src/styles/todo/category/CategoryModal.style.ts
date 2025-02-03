import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  gap: 30px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 400px;
  padding: 30px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:first-child {
      background: #ccc;
    }

    &:nth-child(2) {
      background: #ff6b6b;
      color: white;
    }
  }
`;

export const EditForm = styled.input`
  border: 2px solid rgb(230, 230, 230);
  border-radius: 20px;
  font-size: 18px;
  padding: 3px 15px;
`;

export const ColorForm = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColorItem = styled.button<{ color: string }>`
  margin-top: 15px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const CloseButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
  cursor: pointer;
`;
