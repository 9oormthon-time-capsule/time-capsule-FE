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
	padding: 40px;
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

    &:last-child {
      background: #ff6b6b;
      color: white;
    }
  }
`;
