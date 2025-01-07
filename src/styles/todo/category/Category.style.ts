import styled from 'styled-components';

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding-top: 30px;
	gap: 20px;
`;

export const CategoryItem = styled.div<{ color: string }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 30px;
	background-color: ${(props) => props.color};
	white-space: nowrap;
`;
