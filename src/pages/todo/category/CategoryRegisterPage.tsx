import { useNavigate } from 'react-router-dom';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/CategoryRegister.style';
import { useEffect, useState } from 'react';
import useCategory from '../../../hooks/useCategory';
import Loading from '../../../components/common/Loading';

const CategoryRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selectColor, setSelectColor] = useState('');
  const nav = useNavigate();
  const { addCategoryMutation } = useCategory();
  const [showLoading, setShowLoading] = useState(false);

  const colors = [
    '#FF6F6F',
    '#FF9E6F',
    '#fee524',
    '#6FD96F',
    '#6FCFFF',
    '#6FA8FF',
    '#A786E9',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color: string) => {
    setSelectColor(color);
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!value || !selectColor) {
      alert('카테고리 이름과 색상을 선택해주세요!');
      return;
    }

    const categoryData = {
      categoryName: value,
      textColor: selectColor,
    };

    addCategoryMutation.mutate(categoryData, {
      onSuccess: () => {
        try {
          nav('/todo');
        } catch (error) {
          console.error('카테고리 추가 후 데이터 갱신 중 오류 발생:', error);
          alert('카테고리 추가 후 데이터를 갱신하는데 문제가 발생했습니다.');
        }
      },
      onError: (error) => {
        console.error('카테고리 등록 중 오류 발생:', error);
        alert('카테고리 등록 중 문제가 발생했습니다.');
      },
    });
  };

  useEffect(() => {
    if (addCategoryMutation.isPending) {
      const timer = setTimeout(() => setShowLoading(true), 200);
      return () => clearTimeout(timer);
    }
    setShowLoading(false);
  }, [addCategoryMutation.isPending]);

  return (
    <MainLayout>
      {showLoading && <Loading />}
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
