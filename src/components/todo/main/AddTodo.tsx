import { useEffect, useState } from 'react';
import * as S from '../../../styles/todo/main/AddTodo.style';
import { fetchCategories } from '../../../api/category';

type category = {
  id: string;
  categoryName: string;
  textColor: string;
};

export default function AddTodo() {
  const [categories, setCategories] = useState<category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (id: string) => {
    console.log(id);
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  return (
    <S.TodoContainer>
      <S.CategoryListContainer>
        {categories.map((category) => (
          <div>
            <S.CategoryItem
              key={category.id}
              textColor={category.textColor}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.categoryName}
              <S.PlusButton>＋</S.PlusButton>
            </S.CategoryItem>
            {activeCategory === category.id && (
              <S.InputGroup>
                <S.CheckBox type="checkbox" textColor={category.textColor} />
                <S.TodoInput
                  type="text"
                  placeholder="할 일 입력"
                  textColor={category.textColor}
                />
                <S.AddButton textColor={category.textColor}>추가</S.AddButton>
              </S.InputGroup>
            )}
          </div>
        ))}
      </S.CategoryListContainer>
    </S.TodoContainer>
  );
}
