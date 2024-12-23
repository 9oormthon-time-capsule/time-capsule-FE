import styled from 'styled-components';

export const CategoryRegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	overflow: hidden;
`;

export const CategoryFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 180px;
`;

export const CategoryInput = styled.input`
	width: 100%;
	padding: 5px;
	font-size: 20px;
	border: none;
`;

export const ColorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 5px;
	font-size: 20px;
	border: none;
	margin-top: 30px;
`;

export const UnderLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: gray;
`;

export const DropdownButton = styled.button`
	cursor: pointer;
`;

export const DropdownMenu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	list-style: none;
	margin-top: 15px;
	gap: 20px;
`;

export const DropdownItem = styled.li<{ color: string }>`
	width: 25px;
	height: 25px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 1px 4px rgba(0, 0, 0, 0.1);
	}
`;
