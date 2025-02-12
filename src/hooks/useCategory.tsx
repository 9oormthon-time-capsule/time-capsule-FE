import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteCategory,
  fetchCategories,
  modifiedCategory,
  registerCategory,
} from '../api/category';

export default function useCategory() {
  const queryClient = useQueryClient();

  const categoryQuery = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const addCategoryMutation = useMutation({
    mutationFn: (categoryData: { categoryName: string; textColor: string }) =>
      registerCategory(categoryData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const modifiedCategoryMutation = useMutation({
    mutationFn: ({
      categoryData,
      categoryId,
    }: {
      categoryData: { categoryName: string; textColor: string };
      categoryId: string;
    }) => modifiedCategory(categoryData, categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const deletedCategoryMutation = useMutation({
    mutationFn: ({ categoryId }: { categoryId: string }) =>
      deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  return {
    categoryQuery,
    addCategoryMutation,
    modifiedCategoryMutation,
    deletedCategoryMutation,
  };
}
