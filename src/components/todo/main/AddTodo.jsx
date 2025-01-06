// import React from 'react';
// import * as S from '../../../styles/todo/main/AddTodo.style';

// export default function AddTodo() {

// 	return (
// 		<S.TodoContainer>
// 			<S.TodoTitle>카테고리 1</S.TodoTitle>
// 			<S.InputGroup>
// 				<S.CheckBox type="checkbox" />
// 				<S.TodoInput type="text" placeholder="할 일 입력" />
// 				<S.AddButton>추가</S.AddButton>
// 			</S.InputGroup>
// 		</S.TodoContainer>
// 	);
// }

// AddTodo.jsx

import React, { useState } from 'react';
import * as S from '../../../styles/todo/main/AddTodo.style';

export default function AddTodo({ selectedDate, todos, handleAddTodo, handleCheckTodo }) {
    const [task, setTask] = useState('');

    // 선택된 날짜에 해당하는 할 일 필터링 (날짜 형식 'YYYY-MM-DD'로 맞추기)
    const selectedDateString = selectedDate.toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식

    const filteredTodos = todos.filter(
        (todo) => todo.date === selectedDateString
    );

    return (
        <S.TodoContainer>
            <S.TodoTitle>{selectedDateString}</S.TodoTitle>
            <S.InputGroup>
                <S.CheckBox type="checkbox" disabled />
                <S.TodoInput
                    type="text"
                    placeholder="할 일 입력"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <S.AddButton onClick={() => {
                    handleAddTodo(task);
                    setTask(''); // 입력 필드 초기화
                }}>
                    추가
                </S.AddButton>
            </S.InputGroup>

            {/* 할 일 목록 */}
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={todo.checked}
                            onChange={() => handleCheckTodo(todo.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
                            {todo.task}
                        </span>
                    </li>
                ))}
            </ul>
        </S.TodoContainer>
    );
}
