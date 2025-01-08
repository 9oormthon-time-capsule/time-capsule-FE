import styled from 'styled-components';

export const OverlayContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	gap: 30px;
`;

export const OverlayContent = styled.div`
	display: flex;
	justify-content: center;
	background: white;
	width: 400px;
	padding: 40px;
	border-radius: 20px;
	font-size: 22px;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: lightgray;
	}
`;
