import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodo, deleteTodo, fetchTodoData, updateTodo } from '../api/todo';

export default function useTodo() {
  const queryClient = useQueryClient();

  const todoQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoData,
  });

  const addTodoMutation = useMutation({
    mutationFn: ({
      task,
      categoryId,
      selectedDate,
    }: {
      task: string;
      categoryId: string;
      selectedDate: string;
    }) => addTodo(task, categoryId, selectedDate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: ({
      todoId,
      isCompleted,
    }: {
      todoId: string;
      isCompleted: boolean;
    }) => updateTodo(todoId, isCompleted),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deletedTodoMutation = useMutation({
    mutationFn: ({ todoId }: { todoId: string }) => deleteTodo(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    todoQuery,
    addTodoMutation,
    updateTodoMutation,
    deletedTodoMutation,
  };
}
