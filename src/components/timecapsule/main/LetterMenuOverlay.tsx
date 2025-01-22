import { canWriteLetter } from '../../../api/letter';
import * as S from '../../../styles/timecapsule/main/LetterMenuOverlay.style';

interface LetterMenuOverlayProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const LetterMenuOverlay: React.FC<LetterMenuOverlayProps> = ({ setIsClicked }) => {
  const handleNavigation = async (path: string) => {
    if (path === '/write/letter') {
      const canWrite = await canWriteLetter();
      if (!canWrite) {
        alert('이번 달 편지를 작성하셨네요. 다음 달에 작성해주세요!');
        return;
      }
    }
    window.location.href = path;
  };

  const handleMenuClose = () => {
    setIsClicked(false);
  }

  return (
    <S.OverlayContainer onClick={handleMenuClose}>
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
