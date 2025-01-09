import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import * as S from '../../../styles/todo/main/AddTodo.style';
import { fetchCategories } from '../../../api/category';
import { addTodo, fetchTodoData, updateTodo } from '../../../api/todo';

type category = {
  id: string;
  categoryName: string;
  textColor: string;
};

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  categoryId: string;
};

export default function AddTodo() {
  const [categories, setCategories] = useState<category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const getTodos = async () => {
      try {
        const data = await fetchTodoData();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    getCategories();
    getTodos();
  }, []);

  const handleCategoryClick = (id: string) => {
    console.log(id);
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const handleWriteTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    categoryId: string,
  ) => {
    if (e.key === 'Enter') {
      handleAddTodo(categoryId);
    }
  };

  const handleAddTodo = async (categoryId: string) => {
    if (!task.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }

    try {
      await addTodo(task, categoryId);
      const updatedTodos = await fetchTodoData();
      setTodos(updatedTodos);
      setTask('');

      console.log('할 일이 성공적으로 추가되었습니다!');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleCheckBoxChange = async (
    todoId: string,
    currentChecked: boolean,
  ) => {
    try {
      await updateTodo(todoId, !currentChecked);

      const updatedTodos = await fetchTodoData();
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
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

            {todos.map((todo) => {
              if (todo.categoryId === category.id) {
                return (
                  <S.TodoItem key={todo.id}>
                    <S.CheckBox
                      type="checkbox"
                      textColor={category.textColor}
                      checked={todo.isCompleted}
                      onChange={() =>
                        handleCheckBoxChange(todo.id, todo.isCompleted)
                      }
                    />
                    <S.TodoText>{todo.task}</S.TodoText>
                  </S.TodoItem>
                );
              }
              return null; // 조건에 맞지 않으면 아무것도 출력하지 않음
            })}

            {activeCategory === category.id && (
              <S.InputGroup>
                <S.CheckBox
                  type="checkbox"
                  textColor={category.textColor}
                  checked={false}
                />
                <S.TodoInput
                  type="text"
                  placeholder="할 일 입력"
                  textColor={category.textColor}
                  value={task}
                  onChange={handleWriteTodo}
                  onKeyDown={(e) => handleKeyDown(e, category.id)}
                />
                <S.AddButton
                  textColor={category.textColor}
                  onClick={() => handleAddTodo(category.id)}
                >
                  추가
                </S.AddButton>
              </S.InputGroup>
            )}
          </div>
        ))}
      </S.CategoryListContainer>
    </S.TodoContainer>
  );
}
