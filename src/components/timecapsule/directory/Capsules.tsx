import * as S from '../../../styles/timecapsule/directory/Directory.style';
import { CAPSULE_IMAGE } from '../../../mock/capsule';

interface ICapsuleContainer {
  letterData: { id: number; createdAt: string }[];
  pageType: string;
}

const CapsuleContainer = ({ letterData, pageType }: ICapsuleContainer) => {
  return (
    <S.CapsuleContainer>
      {letterData.map((data, index) => (
        <S.CapsuleBox key={data.id}>
          <S.CapsuleLabelBox>
            <S.CapsuleLabel>{data.createdAt}</S.CapsuleLabel>
          </S.CapsuleLabelBox>
          <a
            href={
              pageType === '타임캡슐'
                ? `/detail/letter/${data.id}`
                : `/detail/reflect/${data.id}`
            }
          >
            <S.CapsuleImg src={CAPSULE_IMAGE[index % CAPSULE_IMAGE.length]} />
          </a>
        </S.CapsuleBox>
      ))}
    </S.CapsuleContainer>
  );
};

export default CapsuleContainer;
