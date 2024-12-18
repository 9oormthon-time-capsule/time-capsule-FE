import styled from 'styled-components';

const LetterMenuOverlay = () => {
	return (
		<OverlayWrapper>
			<OverlayContent>2026년의 나에게 편지 작성하기</OverlayContent>
			<OverlayContent>오늘의 일기 작성하기</OverlayContent>
		</OverlayWrapper>
	);
};

const OverlayWrapper = styled.div`
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

const OverlayContent = styled.div`
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

export default LetterMenuOverlay;
