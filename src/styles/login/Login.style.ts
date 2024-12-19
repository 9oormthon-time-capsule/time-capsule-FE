import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: url('/background.png') no-repeat;
  background-size: cover;

  gap: 1.625rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h1`
  font-size: 3em;
  color: #fdfdfd;
`;

export const IntroText = styled.span`
  font-size: 1.325em;
  color: #b5b5b5;
`;

export const LoginButton = styled.button`
  width: 31rem;
  height: 4.625rem;

  background: url('/login/kakao_login_button.png') no-repeat;
  background-size: contain;
`;
