import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1200px;
	min-width: 700px;

	margin: 30px auto;
	padding: 0 65px;
`;

export const BackSection = styled.div`
	font-size: 30px;
	cursor: pointer;
`;

export const TitleSection = styled.div`
	font-size: 23px;
	font-weight: bold;
`;

export const ButtonSection = styled.div`
	font-size: ${({ isPlus }) => (isPlus ? '40px' : '20px')};
	font-weight: ${({ isPlus }) => (isPlus ? '400' : '600')};
	cursor: pointer;
`;
