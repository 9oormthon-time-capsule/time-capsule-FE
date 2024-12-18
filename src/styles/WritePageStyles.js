import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0.5rem;
`;

export const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4.5rem;
	font-weight: bold;
	color: #222222;
	letter-spacing: 5px;
	font-family: 'Arial', sans-serif;
	text-shadow: 4px 4px 6px rgba(255, 255, 255, 0.4);

	@media (max-width: 768px) {
		font-size: 3.5rem;
	}
`;

export const SubTitle = styled.div`
	font-weight: bold;
	font-size: 1.5rem;
	margin: 1rem;

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

	label {
		font-size: 1.3rem;
		margin: 5px;
		cursor: pointer;
	}
`;

// 반짝이는 애니메이션
const blinkAnimation = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.7); }
  100% { opacity: 0.5; transform: scale(1); }
`;

export const StarsBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgb(134, 138, 169), #e8b9a4);
	overflow: hidden;
	z-index: -1;
`;

export const Star = styled.div`
	position: absolute;
	width: 2px;
	height: 2px;
	background-color: white;
	border-radius: 50%;
	animation: ${blinkAnimation}
		${({ animationDuration }) => animationDuration || '2s'} infinite ease-in-out;
	opacity: ${({ opacity }) => opacity || 1};
	animation-delay: ${({ animationDelay }) => animationDelay || '0s'};
`;
