import styled from 'styled-components';

export const TodoContainer = styled.div`
	background-color: white;
	padding: 1rem;
	border-radius: 10px;
	margin: 1rem;
`;

export const TodoTitle = styled.button`
	font-size: 1rem;
	background-color: rgb(220, 220, 220);
	padding: 0.5rem 1rem;
	border-radius: 3rem;
	font-weight: bold;
	width: auto;
`;

export const InputGroup = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const CheckBox = styled.input`
	appearance: none;
	width: 1.2rem;
	height: 1.2rem;
	border: 1.5px solid gainsboro;
	border-radius: 0.35rem;

	&:checked {
		border-color: transparent;
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
		background-color: #222222;
	}
`;

export const TodoInput = styled.input`
	flex: 1;
	max-width: 100%;
	padding: 5px;
	margin-left: 10px;
	border: none;
	border-bottom: 1px solid black;
`;

export const AddButton = styled.button`
	padding: 0.3rem;
	margin-left: 0.5rem;
	background-color: #222222;
	color: white;
	border: none;
	border-radius: 5px;
`;
