import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	overflow: hidden;
`;

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding: 10px 180px;
	gap: 20px;
`;

export const CategoryItem = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 30px;
	background-color: #e8e8e8;
	white-space: nowrap;
`;
