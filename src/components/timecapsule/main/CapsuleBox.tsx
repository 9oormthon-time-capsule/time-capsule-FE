import * as S from '../../../styles/timecapsule/main/CapsuleBox.style';

const IMAGE_MAP = [
	{ range: [1, 3], src: '/main/Box-2.png' },
	{ range: [4, 8], src: '/main/Box-3.png' },
	{ range: [9, 12], src: '/main/Box-4.png' },
  ];

const CapsuleBox = ({ letterCount }) => {
  const handleCapsuleBox = () => {
    window.location.href = `/directory/time`;
  };

  const getImageSrc = () => {
    const found = IMAGE_MAP.find(
      (item) => letterCount >= item.range[0] && letterCount <= item.range[1]
    );
    return found ? found.src : '/main/Box-1.png';
  };

  return (
    <S.CapsuleBoxContainer>
      <S.TitleContainer>
        <S.TopSection>2026년의 나에게</S.TopSection>
        <S.BottomSection>
          <img src="/main/Capsule.svg" width={60} height={35} />
          <span>{letterCount}</span>개의 편지가 보관되어있어요!
        </S.BottomSection>
      </S.TitleContainer>
      <S.BoxContainer onClick={handleCapsuleBox}>
        <img src={getImageSrc()} width={470} height={470} />
      </S.BoxContainer>
    </S.CapsuleBoxContainer>
  );
};

export default CapsuleBox;
