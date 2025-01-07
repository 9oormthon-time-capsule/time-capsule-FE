import { useNavigate } from 'react-router-dom';
import { registerCategory } from '../../../api/category';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import { useUserStore } from '../../../store/userStore';
import * as S from '../../../styles/todo/category/CategoryRegister.style';
import { useState } from 'react';

const CategoryRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selectColor, setSelectColor] = useState('');
  const nav = useNavigate();
  const { userId } = useUserStore((state) => state);

  const colors = [
    '#000000',
    '#FF6F6F',
    '#FFA26F',
    '#FFFF6F',
    '#6FFF6F',
    '#6F9FFF',
    '#6F6FFF',
    '#9F6FFF',
    '#FFFFFF',
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectColor(color);
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (!value || !selectColor) {
      alert('카테고리 이름과 색상을 선택해주세요!');
      return;
    }

    const categoryData = {
      categoryName: value,
      color: selectColor,
    };

    try {
        await registerCategory(userId, categoryData);
        nav(`/todo/${userId}`);
    } catch (error) {
      console.error('Error registering category:', error);
      alert('카테고리 등록 중 문제가 발생했습니다.');
    }
  };

  return (
    <MainLayout>
      <CategoryHeader
        title="카테고리 등록"
        button="완료"
        onSubmit={handleSubmit}
      />
      <S.CategoryFormWrapper>
        <S.CategoryInput
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="카테고리 입력"
        />
        <S.UnderLine />
        <S.ColorContainer>
          <span>색상</span>
          <S.DropdownButton onClick={handleOpen}>
            {selectColor ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <S.SelectedColorIndicator color={selectColor} />
              </div>
            ) : (
              '색상 선택'
            )}{' '}
            {isOpen ? '▲' : '▼'}
            {isOpen && (
              <S.DropdownMenu>
                {colors.map((color) => (
                  <S.DropdownItem
                    key={color}
                    color={color}
                    onClick={() => handleColorClick(color)}
                  />
                ))}
              </S.DropdownMenu>
            )}
          </S.DropdownButton>
        </S.ColorContainer>
      </S.CategoryFormWrapper>
    </MainLayout>
  );
};

export default CategoryRegister;