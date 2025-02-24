import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodo, deleteTodo, fetchTodoData, updateTodo } from '../api/todo';

interface ITodo {
  id: string;
  task: string;
  categoryId: string;
  selectedDate: string;
  isCompleted: boolean;
  createdAt: number;
}

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
    onMutate: async ({ task, categoryId, selectedDate }) => {
      const newTodo: ITodo = {
        id: Date.now().toString(),
        task,
        categoryId,
        selectedDate,
        isCompleted: false,
        createdAt: Date.now(),
      };

      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<{ todos: ITodo[] }>([
        'todos',
      ]);

      queryClient.setQueryData(['todos'], (oldData: { todos: ITodo[] }) => ({
        ...oldData,
        todos: [...oldData.todos, newTodo],
      }));

      return { previousTodos };
    },
    onError: (context: { previousTodos: { todos: ITodo[] } }) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: ({
      todoId,
      task,
      isCompleted,
    }: {
      todoId: string;
      task: string;
      isCompleted: boolean;
    }) => updateTodo(todoId, task, isCompleted),
    onMutate: async ({ todoId, task, isCompleted }) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<{ todos: ITodo[] }>([
        'todos',
      ]);

      queryClient.setQueryData(['todos'], (oldData: { todos: ITodo[] }) => ({
        ...oldData,
        todos: oldData.todos.map((todo) =>
          todo.id === todoId ? { ...todo, task, isCompleted } : todo,
        ),
      }));

      return { previousTodos };
    },
    onError: (context: { previousTodos: { todos: ITodo[] } }) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deletedTodoMutation = useMutation({
    mutationFn: ({ todoId }: { todoId: string }) => deleteTodo(todoId),
    onMutate: async ({ todoId }) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<{ todos: ITodo[] }>([
        'todos',
      ]);

      queryClient.setQueryData(['todos'], (oldData: { todos: ITodo[] }) => ({
        ...oldData,
        todos: oldData.todos.filter((todo) => todo.id !== todoId),
      }));

      return { previousTodos };
    },
    onError: (context: { previousTodos: { todos: ITodo[] } }) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
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
