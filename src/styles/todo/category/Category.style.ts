import styled from 'styled-components';

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding-top: 30px;
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
