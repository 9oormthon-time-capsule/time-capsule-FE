import * as S from '../../../styles/timecapsule/write/WritePage.style';
import WriteForm from '../../../components/timecapsule/write/WriteForm';
import { StarsBackground } from '../../../components/timecapsule/write/StarsBackground';
import { useEffect } from 'react';

export default function LetterWritePage() {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <S.WriteContainer>
      <StarsBackground />
      <S.TitleContainer>
        <S.Title>Time Capsule</S.Title>
        <S.SubTitle>미래의 나에게 편지를 보내자!</S.SubTitle>
      </S.TitleContainer>
      <WriteForm placeholder="편지를 작성해보세요!" mode="letter" />
    </S.WriteContainer>
  );
}
