import * as S from '../../../styles/todo/category/CategoryModal.style';

interface CategoryModalProps {
  onClose: () => void;
  onModifyComplete: () => void;
  onConfirm: () => void;
  onDelete: () => void;
  isDelete: boolean;
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
  onModifyComplete,
  onDelete,
  onConfirm,
  isDelete,
  categoryName,
  onCategoryChange,
}) => {
  return (
    <S.ModalContainer>
      <S.ModalContent>
        {!isDelete ? (
          <>
            <S.CloseButtonBox>
              <button onClick={onModifyComplete}>확인</button>
            </S.CloseButtonBox>
            <S.MainMessage>
              <S.EditForm
                type="text"
                value={categoryName}
                onChange={(e) =>
                  onCategoryChange('categoryName', e.target.value)
                }
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
            </S.MainMessage>
          </>
        ) : (
          <S.MainMessage>
            해당 카테고리를 삭제하시겠습니까?
            <br />
            포함되어 있던 할 일들은 모두 삭제됩니다.
          </S.MainMessage>
        )}
        <S.ButtonGroup>
          {!isDelete ? (
            <>
              <button onClick={onClose}>취소</button>
              <button onClick={onDelete}>삭제</button>
            </>
          ) : (
            <>
              <button onClick={onClose}>취소</button>
              <button onClick={onConfirm}>삭제</button>
            </>
          )}
        </S.ButtonGroup>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default CategoryModal;
