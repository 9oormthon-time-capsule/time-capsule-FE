import styled from 'styled-components';

export const TodoHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100px;

	max-width: 1200px;
	min-width: 700px;

	margin: 30px auto;
`;

export const LogoContainer = styled.div`
	width: 80px;
	height: 60px;
	background-color: lightgray;
`;

export const TodoHeaderTitle = styled.div`
	width: auto;
	height: 25px;
	margin-left: 25px;
	font-size: 24px;
	font-weight: 600;
	color: black;
`;

export const MenuContainer = styled.div`
	margin-left: auto;
	cursor: pointer;
`;
