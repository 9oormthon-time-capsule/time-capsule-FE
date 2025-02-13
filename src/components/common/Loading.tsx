import * as S from '../../styles/common/Loading.style';

export default function Loading() {
  return (
    <S.LoadingOverlay>
      <S.LoadingImage src="/loading.gif" alt="loading" />
    </S.LoadingOverlay>
  );
}
