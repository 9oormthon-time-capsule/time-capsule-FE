import * as S from '../../../styles/timecapsule/directory/Directory.style';
import { CAPSULE_IMAGE } from '../../../mock/capsule';
import { canReadLetter } from '../../../api/letter';

interface ICapsuleContainer {
  letterData: { id: number; createdAt: string }[];
  pageType: string;
}

const CapsuleContainer = ({ letterData, pageType }: ICapsuleContainer) => {
  const handleClick = async (dataId: number) => {
    if (pageType === '타임캡슐') {
      const canRead = await canReadLetter();
      if (!canRead) {
        alert('아직 타임캡슐을 열 수 없습니다!');
        return;
      } else {
        window.location.href = `/detail/letter/${dataId}`;
      }
    } else {
      window.location.href = `/detail/reflect/${dataId}`;
    }
  };
  return (
    <S.CapsuleContainer>
      {letterData.map((data, index) => (
        <S.CapsuleBox key={data.id}>
          <S.CapsuleLabelBox>
            <S.CapsuleLabel>{data.createdAt}</S.CapsuleLabel>
          </S.CapsuleLabelBox>
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleClick(data.id);
            }}
          >
            <S.CapsuleImg src={CAPSULE_IMAGE[index % CAPSULE_IMAGE.length]} />
          </a>
        </S.CapsuleBox>
      ))}
    </S.CapsuleContainer>
  );
};

export default CapsuleContainer;
