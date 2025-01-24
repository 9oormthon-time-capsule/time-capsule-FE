import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import * as S from '../../../styles/todo/main/AddTodo.style';
import { fetchCategories } from '../../../api/category';
import dayjs from 'dayjs';
import useTodo from '../../../hooks/useTodo';

type category = {
  id: string;
  categoryName: string;
  textColor: string;
};

type AddTodoProps = {
  selectedDate: string;
};

export default function AddTodo({ selectedDate }: AddTodoProps) {
  const [categories, setCategories] = useState<category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [task, setTask] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    todoQuery,
    addTodoMutation,
    updateTodoMutation,
    deletedTodoMutation,
  } = useTodo();
  const todos = todoQuery.data?.todos ?? [];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategories();

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

  const handleAddTodo = (categoryId: string) => {
    if (!task.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }

    if (addTodoMutation.isPending) return;

    addTodoMutation.mutateAsync({ task, categoryId });

    setTask('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCheckBoxChange = (todoId: string, currentChecked: boolean) => {
    updateTodoMutation.mutate({ todoId, isCompleted: !currentChecked });
  };

  const handleDeleteTodo = (todoId: string) => {
    deletedTodoMutation.mutateAsync({ todoId });
  };

  const toggleDropdown = (todoId: string) => {
    setIsMenuOpen((prev) => (prev === todoId ? null : todoId));
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuOpen(null);
    }

    if (
      inputRef.current &&
      !inputRef.current.contains(e.target as Node) &&
      !(e.target && (e.target as Element).closest('button') === e.target)
    ) {
      setActiveCategory(null);
    }
  };

  return (
    <S.TodoContainer>
      {categories.length === 0 ? (
        <S.MsgContainer>
          <S.MsgText>할 일이 없습니다.</S.MsgText>
          <S.MsgText>카테고리를 먼저 추가하세요!</S.MsgText>
        </S.MsgContainer>
      ) : (
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

              {Array.isArray(todos) &&
                todos.map((todo) => {
                  if (
                    selectedDate ===
                      dayjs(todo.createdAt).format('YYYY-MM-DD') &&
                    todo.categoryId === category.id
                  ) {
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

                        <S.TodoMenu onClick={() => toggleDropdown(todo.id)}>
                          •••
                        </S.TodoMenu>

                        {isMenuOpen === todo.id && (
                          <S.DropdownMenu ref={menuRef}>
                            <S.DropdownItem>수정</S.DropdownItem>
                            <S.DropdownItem
                              onClick={() => handleDeleteTodo(todo.id)}
                            >
                              삭제
                            </S.DropdownItem>
                          </S.DropdownMenu>
                        )}
                      </S.TodoItem>
                    );
                  }
                  return null;
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
                    ref={inputRef}
                    autoFocus
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
      )}
    </S.TodoContainer>
  );
}