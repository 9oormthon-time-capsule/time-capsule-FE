import React from 'react';
import {
	Title,
	Container,
	TodoContainer,
	StyledInput,
	CheckBox,
	StyledButton,
} from '../../../styles/todo/main/AddTodo.styles';

export default function AddTodo() {
	return (
		<Container>
			<Title>카테고리 1</Title>
			<TodoContainer>
				<CheckBox type="checkbox" />
				<StyledInput type="text" placeholder="할 일 입력" />
				<StyledButton>추가</StyledButton>
			</TodoContainer>
		</Container>
	);
}
