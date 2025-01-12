import axios from 'axios';

interface ITodo {
  id: number;
  task: string;
  isCompleted: boolean;
  categoryId: string;
  createdAt: { seconds: number };
}

export const addTodo = async (task: string, categoryId: string) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/todo/task`,
      {
        task,
        categoryId,
      },
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const fetchTodoData = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/todo/task`, {
      withCredentials: true,
    });

    const todos = response.data.map((item: ITodo) => {
      const date = new Date(item.createdAt.seconds * 1000);

      return {
        id: item.id,
        task: item.task,
        isCompleted: item.isCompleted,
        categoryId: item.categoryId,
        createdAt: date.getTime(),
      };
    });

    const sortedTodos = todos.sort(
      (a: { createdAt: number }, b: { createdAt: number }) =>
        a.createdAt - b.createdAt,
    );
    const currentMonth = new Date().getMonth();
    const completedCount = sortedTodos.filter((todo) => {
      const todoDate = new Date(todo.createdAt);
      return todo.isCompleted && todoDate.getMonth() === currentMonth;
    }).length;

    return {
      todos: sortedTodos,
      completedCount,
    };
  } catch (error) {
    console.error('데이터를 가져오는 데 오류가 발생했습니다:', error);
    return { todos: [], completedCount: 0 };
  }
};

export const updateTodo = async (todoId: string, isCompleted: boolean) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/api/todo/task/${todoId}`,
      {
        isCompleted,
      },
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/todo/task/${todoId}`,
      {
        withCredentials: true,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
