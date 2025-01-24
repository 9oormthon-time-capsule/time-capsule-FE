// import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
// import * as S from '../../../styles/todo/main/AddTodo.style';
// import { fetchCategories } from '../../../api/category';
// import {
//   addTodo,
//   deleteTodo,
//   fetchTodoData,
//   updateTodo,
// } from '../../../api/todo';
// import dayjs from 'dayjs';

// type category = {
//   id: string;
//   categoryName: string;
//   textColor: string;
// };

// type Todo = {
//   id: string;
//   task: string;
//   isCompleted: boolean;
//   categoryId: string;
//   createdAt: number;
// };

// type AddTodoProps = {
//   selectedDate: string;
// };

// export default function AddTodo({ selectedDate }: AddTodoProps) {
//   const [categories, setCategories] = useState<category[]>([]);
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [task, setTask] = useState<string>('');
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     const getTodos = async () => {
//       try {
//         const data = await fetchTodoData();
//         setTodos(data.todos);
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     };

//     getCategories();
//     getTodos();

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleCategoryClick = (id: string) => {
//     console.log(id);
//     setActiveCategory((prev) => (prev === id ? null : id));
//   };

//   const handleWriteTodo = (e: ChangeEvent<HTMLInputElement>) => {
//     setTask(e.target.value);
//   };

//   const handleKeyDown = (
//     e: KeyboardEvent<HTMLInputElement>,
//     categoryId: string,
//   ) => {
//     if (e.key === 'Enter') {
//       handleAddTodo(categoryId);
//     }
//   };

//   const handleAddTodo = async (categoryId: string) => {
//     if (!task.trim()) {
//       alert('할 일을 입력해주세요.');
//       return;
//     }

//     try {
//       await addTodo(task, categoryId);
//       const updatedTodos = await fetchTodoData();
//       setTodos(updatedTodos.todos);
//       setTask('');

//       if (inputRef.current) {
//         inputRef.current.focus();
//       }

//       const event = new CustomEvent('todoUpdated');
//       window.dispatchEvent(event);

//       console.log('할 일이 성공적으로 추가되었습니다!');
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const handleCheckBoxChange = async (
//     todoId: string,
//     currentChecked: boolean,
//   ) => {
//     try {
//       await updateTodo(todoId, !currentChecked);

//       const updatedTodos = await fetchTodoData();
//       setTodos(updatedTodos.todos);

//       const event = new CustomEvent('todoUpdated');
//       window.dispatchEvent(event);
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   const handleDeleteTodo = async (todoId: string) => {
//     try {
//       await deleteTodo(todoId);

//       const updatedTodos = await fetchTodoData();
//       setTodos(updatedTodos.todos);
      
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   const toggleDropdown = (todoId: string) => {
//     setIsMenuOpen((prev) => (prev === todoId ? null : todoId));
//   };

//   const handleClickOutside = (e: MouseEvent) => {
//     if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
//       setIsMenuOpen(null);
//     }

//     if (
//       inputRef.current &&
//       !inputRef.current.contains(e.target as Node) &&
//       !(e.target && (e.target as Element).closest('button') === e.target)
//     ) {
//       setActiveCategory(null);
//     }
//   };

//   return (
//     <S.TodoContainer>
//       {categories.length === 0 ? (
//         <S.MsgContainer>
//           <S.MsgText>할 일이 없습니다.</S.MsgText>
//           <S.MsgText>카테고리를 먼저 추가하세요!</S.MsgText>
//         </S.MsgContainer>
//       ) : (
//         <S.CategoryListContainer>
//           {categories.map((category) => (
//             <div>
//               <S.CategoryItem
//                 key={category.id}
//                 textColor={category.textColor}
//                 onClick={() => handleCategoryClick(category.id)}
//               >
//                 {category.categoryName}
//                 <S.PlusButton>＋</S.PlusButton>
//               </S.CategoryItem>

//               {Array.isArray(todos) &&
//                 todos.map((todo) => {
//                   if (
//                     selectedDate ===
//                       dayjs(todo.createdAt).format('YYYY-MM-DD') &&
//                     todo.categoryId === category.id
//                   ) {
//                     return (
//                       <S.TodoItem key={todo.id}>
//                         <S.CheckBox
//                           type="checkbox"
//                           textColor={category.textColor}
//                           checked={todo.isCompleted}
//                           onChange={() =>
//                             handleCheckBoxChange(todo.id, todo.isCompleted)
//                           }
//                         />
//                         <S.TodoText>{todo.task}</S.TodoText>

//                         <S.TodoMenu onClick={() => toggleDropdown(todo.id)}>
//                           •••
//                         </S.TodoMenu>

//                         {isMenuOpen === todo.id && (
//                           <S.DropdownMenu ref={menuRef}>
//                             <S.DropdownItem>수정</S.DropdownItem>
//                             <S.DropdownItem
//                               onClick={() => handleDeleteTodo(todo.id)}
//                             >
//                               삭제
//                             </S.DropdownItem>
//                           </S.DropdownMenu>
//                         )}
//                       </S.TodoItem>
//                     );
//                   }
//                   return null;
//                 })}

//               {activeCategory === category.id && (
//                 <S.InputGroup>
//                   <S.CheckBox
//                     type="checkbox"
//                     textColor={category.textColor}
//                     checked={false}
//                   />
//                   <S.TodoInput
//                     type="text"
//                     placeholder="할 일 입력"
//                     textColor={category.textColor}
//                     value={task}
//                     onChange={handleWriteTodo}
//                     onKeyDown={(e) => handleKeyDown(e, category.id)}
//                     ref={inputRef}
//                     autoFocus
//                   />
//                   <S.AddButton
//                     textColor={category.textColor}
//                     onClick={() => handleAddTodo(category.id)}
//                   >
//                     추가
//                   </S.AddButton>
//                 </S.InputGroup>
//               )}
//             </div>
//           ))}
//         </S.CategoryListContainer>
//       )}
//     </S.TodoContainer>
//   );
// }

// React의 필요한 훅과 이벤트 타입 가져오기
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
// 스타일 컴포넌트를 정의한 모듈 가져오기
import * as S from '../../../styles/todo/main/AddTodo.style';
// 카테고리 데이터를 가져오는 API 함수 가져오기
import { fetchCategories } from '../../../api/category';
import dayjs from 'dayjs';
import useTodo from '../../../hooks/useTodo';

type category = {
  id: string;  // 카테고리 고유 ID
  categoryName: string;  // 카테고리 이름
  textColor: string;  // 카테고리 색상
};

// AddTodo 컴포넌트의 props 타입 정의
type AddTodoProps = {
  selectedDate: string;  // 선택된 날짜
  // 부모에게 완료된 할 일 수 전달
  onCompletedCountChange: (count: number) => void;
  // handleCategoryClick: (id: string) => void;
  // activeCategory: string | null;
};

export default function AddTodo({ selectedDate, onCompletedCountChange }: AddTodoProps) {
  // 카테고리 상태 관리
  const [categories, setCategories] = useState<category[]>([]);
  // 입력된 할 일 상태 관리
  const [task, setTask] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);
  // 드롭다운 메뉴 DOM 참조
  const menuRef = useRef<HTMLDivElement>(null);
  // 입력 필드 DOM 참조
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    todoQuery,
    addTodoMutation,
    updateTodoMutation,
    deletedTodoMutation,
  } = useTodo();
  const todos = todoQuery.data?.todos ?? [];

  useEffect(() => {
    // 카테고리 데이터를 가져오는 비동기 함수
    const getCategories = async () => {
      try {
        // 카테고리 데이터 요청
        const data = await fetchCategories();
        // 가져온 데이터를 상태로 설정
        setCategories(data);
      } catch (error) {
        // 에러 로그 출력
        console.error('Error fetching categories:', error);
      }
    };

    // 카테고리 데이터 가져오기 실행
    getCategories();

    // 문서의 클릭 이벤트를 감지
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 제거
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행

  // 선택된 날짜 기준으로 완료된 할 일 수를 부모 컴포넌트로 전달하는 useEffect
  useEffect(() => {
    // 선택된 날짜의 완료된 할 일 수 계산
    const completedCount = todos.filter(
      (todo) =>
        todo.isCompleted &&
        dayjs(todo.createdAt).format('YYYY-MM-DD') === selectedDate
    ).length;

    // 완료된 할 일 수를 부모 컴포넌트로 전달
    onCompletedCountChange(completedCount);
  }, [todos, selectedDate, onCompletedCountChange]);

  // 카테고리를 클릭했을 때 실행되는 함수
  const handleCategoryClick = (id: string) => {
    // 활성화된 카테고리 토글
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  // 입력 필드에서 입력값이 변경될 때 실행되는 함수
  const handleWriteTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);  // 입력값을 상태로 저장
  };

  // 입력 필드에서 엔터 키를 눌렀을 때 실행되는 함수
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, categoryId: string) => {
    if (e.key === 'Enter') {
      handleAddTodo(categoryId);  // 할 일 추가 함수 호출
    }
  };

  const handleAddTodo = (categoryId: string) => {
    if (!task.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }

    if (addTodoMutation.isPending) return;

    addTodoMutation.mutate({ task, categoryId });

    setTask('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCheckBoxChange = (todoId: string, currentChecked: boolean) => {
    updateTodoMutation.mutate({ todoId, isCompleted: !currentChecked });
  };

  const handleDeleteTodo = (todoId: string) => {
    deletedTodoMutation.mutate({ todoId });
  };

  // 드롭다운 메뉴를 열고 닫는 함수
  const toggleDropdown = (todoId: string) => {
    // 토글 동작
    setIsMenuOpen((prev) => (prev === todoId ? null : todoId));
  };

  // 드롭다운 메뉴 외부를 클릭했을 때 닫는 함수
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      // 드롭다운 닫기
      setIsMenuOpen(null);
    }

    if (
      inputRef.current &&
      !inputRef.current.contains(e.target as Node) &&
      !(e.target && (e.target as Element).closest('button') === e.target)
    ) {
      // 활성화된 카테고리 초기화
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
            <div key={category.id}>
              <S.CategoryItem
                textColor={category.textColor}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.categoryName}
                <S.PlusButton>＋</S.PlusButton>
              </S.CategoryItem>

              {Array.isArray(todos) &&
                todos.map((todo) => {
                  if (
                    selectedDate === dayjs(todo.createdAt).format('YYYY-MM-DD') &&
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