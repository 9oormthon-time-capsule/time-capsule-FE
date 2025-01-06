import CustomCalendar from '../../components/todo/main/Calendar';
import AddTodo from '../../components/todo/main/AddTodo';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/todo/TodoMainPage.style';
import Header from '../../components/common/Header';

import React, { useState } from 'react';

const TodoMainPage = () => {

	const [selectedDate, setSelectedDate] = useState(new Date()); // 달력에서 선택된 날짜
    const [todos, setTodos] = useState([]); // 전체 할 일 목록

    // 날짜 형식을 'YYYY-MM-DD'로 변환하는 함수
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 할 일 추가 함수
    const handleAddTodo = (task) => {
        if (task.trim() === '') return;

        const formattedDate = formatDate(selectedDate); // 날짜 형식 'YYYY-MM-DD'

        const newTodo = {
            id: Date.now(),
            date: formattedDate,
            task,
            checked: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    // 할 일 체크 함수
    const handleCheckTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    // 날짜별 완료된 할 일 개수 계산
    const completedCountByDate = todos.reduce((acc, todo) => {
        if (todo.checked) {
            acc[todo.date] = (acc[todo.date] || 0) + 1; // 날짜별 완료된 할 일 개수 누적
        }
        return acc;
    }, {});

	return (
		<MainLayout>
			<Header />
			<S.Content>
				{/* 달력 컴포넌트 */}
                <CustomCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    todos={todos}
                    completedCountByDate={completedCountByDate}
                />
                {/* 할 일 추가 컴포넌트 */}
                <AddTodo
                    selectedDate={selectedDate}
                    todos={todos}
                    handleAddTodo={handleAddTodo}
                    handleCheckTodo={handleCheckTodo}
                />
			</S.Content>
		</MainLayout>
	);
};

export default TodoMainPage;
