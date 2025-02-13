import { useState } from 'react';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';
import CategoryModal from '../../../components/todo/category/CategoryModal';
import useCategory from '../../../hooks/useCategory';
import useTodo from '../../../hooks/useTodo';
import Loading from '../../../components/common/Loading';

const CategoryPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [textColor, setTextColor] = useState('');
  const { categoryQuery, modifiedCategoryMutation, deletedCategoryMutation } =
    useCategory();

  const categories = categoryQuery.data ?? [];
  const { todoQuery, deletedTodoMutation } = useTodo();

  const todosInCategory = todoQuery.data?.todos.filter(
    (todo: { categoryId: string }) => todo.categoryId === selectedCategoryId,
  );

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

  const handleCategoryChange = (
    field: 'categoryName' | 'textColor',
    value: string,
  ) => {
    if (field === 'categoryName') {
      setCategoryName(value);
    } else if (field === 'textColor') {
      setTextColor(value);
    }
  };

  const handleModifyOpen = async () => {
    setIsEdit(true);
  };

  const handleModifyComplete = () => {
    if (!selectedCategoryId) return;

    try {
      modifiedCategoryMutation.mutate({
        categoryData: { categoryName, textColor },
        categoryId: selectedCategoryId,
      });
    } catch (error) {
      console.error('수정 중 오류 발생:', error);
      alert('수정 중 문제가 발생했습니다.');
    } finally {
      handleModalClose();
    }
  };

  const handleConfirmDelete = () => {
    if (!selectedCategoryId) return;

    const result = confirm(
      '카테고리를 삭제하시겠습니까?\n포함되어 있던 할 일들은 모두 삭제됩니다.',
    );

    if (!result) return;

    try {
      if (todosInCategory.length > 0) {
        todosInCategory.forEach((todo: { id: string }) =>
          deletedTodoMutation.mutate({ todoId: todo.id }),
        );
      }
      deletedCategoryMutation.mutate({ categoryId: selectedCategoryId });
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
      alert('삭제 중 문제가 발생했습니다.');
    } finally {
      handleModalClose();
    }
  };

  return (
    <MainLayout>
      {deletedCategoryMutation.isPending && <Loading />}
      <CategoryHeader title="카테고리" button="+" />
      <S.CategoryList>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <S.CategoryItem
              key={index}
              textColor={category.textColor}
              onClick={() =>
                handleEditClick(
                  category.id,
                  category.categoryName,
                  category.textColor,
                )
              }
            >
              {category.categoryName}
            </S.CategoryItem>
          ))
        ) : (
          <S.EmptyMessage>
            등록된 카테고리가 없습니다. <br />새 카테고리를 추가해보세요!
          </S.EmptyMessage>
        )}
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
