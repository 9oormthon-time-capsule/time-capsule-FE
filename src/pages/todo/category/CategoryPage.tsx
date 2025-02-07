import { useEffect, useState } from 'react';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';
import { deleteCategory, fetchCategories, modifiedCategory } from '../../../api/category';
import CategoryModal from '../../../components/todo/category/CategoryModal';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [textColor, setTextColor] = useState('');

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
  }, []);

  const handleModalClose = () => {
    setIsEdit(false);
    setIsModalOpen(false);
    setSelectedCategoryId(null);
    setCategoryName('');
    setTextColor('');
  };

  const handleEditClick = (id: string, name: string, color: string) => {
    setIsModalOpen(true);
    setSelectedCategoryId(id);
    setCategoryName(name);
    setTextColor(color);
  };

  const handleCategoryChange = (field: 'categoryName' | 'textColor', value: string) => {
    if (field === 'categoryName') {
      setCategoryName(value);
    } else if (field === 'textColor') {
      setTextColor(value);
    }
  };

  const handleModifyOpen = async () => {
    setIsEdit(true);
  };

  const handleModifyComplete = async () => {
    try {
      await modifiedCategory({ categoryName, textColor }, selectedCategoryId);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === selectedCategoryId ? { ...category, categoryName, textColor } : category
        )
      );
    } catch (error) {
      console.error('수정 중 오류 발생:', error);
      alert('수정 중 문제가 발생했습니다.');
    } finally {
      handleModalClose();
    }
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
            <S.CategoryItem key={index} textColor={category.textColor} onClick={() => handleEditClick(category.id, category.categoryName, category.textColor)}>
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
        <CategoryModal
        onClose={handleModalClose}
        onModify={handleModifyOpen}
        onModifyComplete={handleModifyComplete}
        isEdit={isEdit}
        onConfirm={handleConfirmDelete}
        categoryName={categoryName}
        onCategoryChange={handleCategoryChange}
        />
      )}
    </MainLayout>
  );
};

export default CategoryPage;
