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
	padding: 0.5rem;
`;

export const Title = styled.div`
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
`;

interface EmotionLabelProps {
	isSelected: boolean;
}

export const EmotionLabel = styled.label<EmotionLabelProps>`
	font-size: 1.3rem;
	margin: 5px;
	cursor: pointer;
	background-color: ${({ isSelected }) => (isSelected ? '#666a88' : '')};
	transition: background-color 0.3s;
	border-radius: 50%;
`;
