import * as S from '../../../styles/todo/category/CategoryModal.style';

interface CategoryDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const CategoryDeleteModal: React.FC<CategoryDeleteModalProps> = ({
  onClose,
  onConfirm,
}) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <p>해당 카테고리를 삭제하시겠습니까?</p>
        <S.ButtonGroup>
          <button onClick={onClose}>취소</button>
          <button onClick={onConfirm}>삭제</button>
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default CategoryDeleteModal;
