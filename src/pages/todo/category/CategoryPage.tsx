import { useEffect, useState } from 'react';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';
import { useUserStore } from '../../../store/userStore';
import { deleteCategory, fetchCategories } from '../../../api/category';

const CategoryPage = () => {
  const { userId } = useUserStore((state) => state);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      if (userId) {
        try {
          const categoryData = await fetchCategories();
          setCategories(categoryData);
        } catch (error) {
          console.error('Failed to load category data:', error);
        }
      }
    };
    loadCategories();
  }, [userId]);

  const handleDelete = (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteCategory(id)
        .then(() => {
          alert("삭제가 완료되었습니다.");
          setCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== id)
          );
        })
        .catch((error) => {
          console.error("삭제 중 오류 발생:", error);
          alert("삭제 중 문제가 발생했습니다.");
        });
    }
  };

  return (
    <MainLayout>
      <CategoryHeader title="카테고리" button="+" />
      <S.CategoryList>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <S.CategoryItem key={index} textColor={category.textColor} onClick={() => handleDelete(category.id)}>
              {category.categoryName}
            </S.CategoryItem>
          ))
        ) : (
          <S.EmptyMessage>
            등록된 카테고리가 없습니다. <br />
            새 카테고리를 추가해보세요!
          </S.EmptyMessage>
        )}
      </S.CategoryList>
    </MainLayout>
  );
};

export default CategoryPage;
