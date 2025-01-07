import { useEffect, useState } from 'react';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';
import { useUserStore } from '../../../store/userStore';
import { fetchCategories } from '../../../api/category';

const CategoryPage = () => {
  const { userId } = useUserStore((state) => state);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      if (userId) {
        try {
          const categoryData = await fetchCategories(userId);
          setCategories(categoryData);
        } catch (error) {
          console.error('Failed to load category data:', error);
        }
      }
    };
    loadCategories();
  }, [userId]);

  return (
    <MainLayout>
      <CategoryHeader title="카테고리" button="+" />
      <S.CategoryList>
        {categories.map((category, index) => (
          <S.CategoryItem key={index} color={category.color}>{category.categoryName}</S.CategoryItem>
        ))}
      </S.CategoryList>
    </MainLayout>
  );
};

export default CategoryPage;
