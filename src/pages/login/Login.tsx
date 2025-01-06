import * as S from '../../styles/login/Login.style';
import { KAKAO_AUTH_URL } from './Auth';

function Login() {
  return (
    <S.LoginContainer>
      <S.TitleContainer>
        <S.TitleText>타임 캡슐</S.TitleText>
        <S.IntroText>타임 캡슐에 기록을 담아 보관해 보세요 🍀</S.IntroText>
      </S.TitleContainer>
      <img src="/login/capsule_box.png" alt="capsule box" />
      <a href={KAKAO_AUTH_URL}>
        <S.LoginButton />
      </a>
    </S.LoginContainer>
  );
}

export default Login;
