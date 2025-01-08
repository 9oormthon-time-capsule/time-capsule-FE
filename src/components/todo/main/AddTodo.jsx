import React from 'react';
import * as S from '../../../styles/todo/main/AddTodo.style';

export default function AddTodo() {
	return (
		<S.TodoContainer>
			<S.TodoTitle>카테고리 1</S.TodoTitle>
			<S.InputGroup>
				<S.CheckBox type="checkbox" />
				<S.TodoInput type="text" placeholder="할 일 입력" />
				<S.AddButton>추가</S.AddButton>
			</S.InputGroup>
		</S.TodoContainer>
	);
}
