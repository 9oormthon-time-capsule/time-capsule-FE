import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/timecapsule/directory/EmptyDirectory.style';

interface IEmptyDirectory {
  directoryType: string;
  writeType: string;
  href: string;
}

const EmptyDirectory = ({
  directoryType,
  writeType,
  href,
}: IEmptyDirectory) => {
  const router = useNavigate();

  return (
    <S.EmptyContainer>
      <S.EmptyText>작성된 {directoryType} 없어요.</S.EmptyText>
      <S.NavigateButton onClick={() => router(href)}>
        {writeType} 작성하러 가기
      </S.NavigateButton>
    </S.EmptyContainer>
  );
};

export default EmptyDirectory;
