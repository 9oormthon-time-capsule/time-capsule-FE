import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 20rem;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 32.5rem;

  z-index: 999;

  gap: 2.5rem;
  padding: 2.25rem;

  background-color: #fff;
  border-radius: 1rem;
  box-shadow:
    0px 0px 4px 0px rgba(29, 27, 26, 0.08),
    0px 3px 8px 0px rgba(29, 27, 26, 0.12),
    0px 8px 16px 0px rgba(29, 27, 26, 0.16);
`;

export const TitleText = styled.span`
  align-self: stretch;

  color: #121110;

  font-style: normal;
  font-size: 1.5625rem;
  font-weight: 570;
  line-height: 140%;
  letter-spacing: -0.01563rem;
`;

export const BodyText = styled.span`
  align-self: stretch;

  color: #545250;

  font-style: normal;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 160%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;

  gap: 1rem;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #6d6a68;
  background-color: #fff;

  gap: 0.375rem;
  padding: 0.625rem 0.875rem;

  text-align: center;
  font-style: normal;
  font-size: 1rem;
  font-weight: 510;
  line-height: 150%;

  border-radius: 0.5rem;
  border: 1px solid rgba(49, 22, 13, 0.19);
`;

export const WithdrawButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background-color: red;

  gap: 0.375rem;
  padding: 0.625rem 0.875rem;

  text-align: center;
  font-style: normal;
  font-size: 1rem;
  font-weight: 510;
  line-height: 150%;

  border-radius: 0.5rem;
  border: 1px solid red;
`;
