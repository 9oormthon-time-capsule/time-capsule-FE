import * as S from '../../../styles/todo/category/CategoryModal.style';

interface CategoryModalProps {
  onClose: () => void;
  onModify: () => void;
  onModifyComplete: () => void;
  onConfirm: () => void;
  isEdit: boolean;
  categoryName: string;
  onCategoryChange: (
    field: 'categoryName' | 'textColor',
    value: string,
  ) => void;
}

const colors = [
  '#FF6F6F',
  '#FF9E6F',
  '#fee524',
  '#6FD96F',
  '#6FCFFF',
  '#6FA8FF',
  '#A786E9',
];

const CategoryModal: React.FC<CategoryModalProps> = ({
  onClose,
  onModify,
  onModifyComplete,
  onConfirm,
  isEdit,
  categoryName,
  onCategoryChange,
}) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseButtonBox>
          <img src='/main/Close.svg' onClick={onClose} width={22} height={22} />
        </S.CloseButtonBox>
        {isEdit ? (
          <>
            <S.EditForm
              type="text"
              value={categoryName}
              onChange={(e) => onCategoryChange('categoryName', e.target.value)}
            />
            <S.ColorForm>
              {colors.map((color) => (
                <S.ColorItem
                  key={color}
                  color={color}
                  onClick={() => onCategoryChange('textColor', color)}
                />
              ))}
            </S.ColorForm>
          </>
        ) : (
          <p>해당 카테고리를 수정 / 삭제하시겠습니까?</p>
        )}
        <S.ButtonGroup>
          {isEdit ? (
            <button onClick={onModifyComplete}>완료</button>
          ) : (
            <>
              <button onClick={onModify}>수정</button>
              <button onClick={onConfirm}>삭제</button>
            </>
          )}
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default CategoryModal;
