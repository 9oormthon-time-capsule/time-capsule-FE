import { useEffect, useState } from 'react';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';
import { deleteCategory, fetchCategories } from '../../../api/category';
import CategoryDeleteModal from '../../../components/todo/category/CategoryDeleteModal';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadCategories = async () => {
        try {
          const categoryData = await fetchCategories();
          setCategories(categoryData);
        } catch (error) {
          console.error('Failed to load category data:', error);
        }
    };
    loadCategories();
  });

  const handleDeleteClick = (id: string) => {
    setIsModalOpen(true);
    setSelectedCategoryId(id);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategoryId(null);
  }

  const handleConfirmDelete = async () => {
    if (!selectedCategoryId) return;
    try {
      await deleteCategory(selectedCategoryId);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== selectedCategoryId)
      );
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
      alert('삭제 중 문제가 발생했습니다.');
    } finally {
      handleModalClose();
    }
  };

  return (
    <MainLayout>
      <CategoryHeader title="카테고리" button="+" />
      <S.CategoryList>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <S.CategoryItem key={index} textColor={category.textColor} onClick={() => handleDeleteClick(category.id)}>
              {category.categoryName}
            </S.CategoryItem>
          ))
        ) : (
          <S.EmptyMessage>
            등록된 카테고리가 없습니다. <br />
            새 카테고리를 추가해보세요!
          </S.EmptyMessage>
        )
      }
      </S.CategoryList>
      {isModalOpen && (
        <CategoryDeleteModal
          onClose={handleModalClose}
          onConfirm={handleConfirmDelete}
        />
      )}
    </MainLayout>
  );
};

export default CategoryPage;
