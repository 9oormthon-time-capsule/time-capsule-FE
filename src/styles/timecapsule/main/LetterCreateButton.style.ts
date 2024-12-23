import styled from 'styled-components';

export const LetterMenuContainer = styled.div`
	position: fixed;
	bottom: 30px;
	right: 50px;
	z-index: 100;
`;

export const ButtonFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 80px;
	height: 80px;

	border-radius: 100%;
	background-color: lightgray;

	cursor: pointer;
`;
