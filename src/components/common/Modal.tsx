import * as S from '../../styles/common/Modal.style';

interface IModal {
  titleText: string;
  bodyText: string;
  buttonText: string;
  onClose: () => void;
  handleWithdrawButton: () => void;
}

const Modal = ({
  titleText,
  bodyText,
  buttonText,
  onClose,
  handleWithdrawButton,
}: IModal) => {
  return (
    <S.ModalContainer>
      <S.TitleText>{titleText}</S.TitleText>
      <S.BodyText>{bodyText}</S.BodyText>
      <S.ButtonContainer>
        <S.CancelButton onClick={onClose}>취소</S.CancelButton>
        <S.WithdrawButton onClick={handleWithdrawButton}>
          {buttonText}
        </S.WithdrawButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default Modal;
