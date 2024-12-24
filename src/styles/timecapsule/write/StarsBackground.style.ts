import styled, { keyframes } from 'styled-components';

// 반짝이는 애니메이션
const blinkAnimation = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.7); }
  100% { opacity: 0.5; transform: scale(1); }
`;

export const StarsBackgroundContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgb(134, 138, 169), #e8b9a4);
	overflow: hidden;
	z-index: -1;
`;

interface StarProps {
	animationDuration?: string;
	opacity?: number;
	animationDelay?: string;
}

export const Star = styled.div<StarProps>`
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
