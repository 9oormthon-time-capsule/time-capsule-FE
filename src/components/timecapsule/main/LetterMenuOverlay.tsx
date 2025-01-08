import * as S from '../../../styles/timecapsule/main/LetterMenuOverlay.style';

const LetterMenuOverlay = () => {
	const handleNavigation = (path: string) => {
		window.location.href = path;
	};

	return (
		<S.OverlayContainer>
			<S.OverlayContent onClick={() => handleNavigation('/write/letter')}>
				2026년의 나에게 편지 작성하기
			</S.OverlayContent>
			<S.OverlayContent onClick={() => handleNavigation('/write/reflect')}>
				오늘의 일기 작성하기
			</S.OverlayContent>
		</S.OverlayContainer>
	);
};

export default LetterMenuOverlay;
