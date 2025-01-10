import styled from 'styled-components';

export const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding-top: 30px;
	gap: 20px;
`;

export const CategoryItem = styled.div<{ textColor: string }>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 30px;
	background-color: rgb(243,243,243);
	color: ${(props) => props.textColor};
	font-weight: 800;
	white-space: nowrap;
	cursor: pointer;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #888;
  font-size: 16px;
  margin-top: 20px;
`;
