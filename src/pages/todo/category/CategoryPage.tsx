import styled from 'styled-components';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';

const CategoryPage = () => {
	return (
		<>
			<CategoryHeader title="카테고리" button="+" />
			<CategoryList>
				<CategoryItem>개인 학습</CategoryItem>
				<CategoryItem>중요 일정</CategoryItem>
				<CategoryItem>약속</CategoryItem>
			</CategoryList>
		</>
	);
};

const CategoryList = styled.div`
	display: flex;
	flex-direction: column;
    align-items: flex-start;
	width: 100%;
	padding: 10px 150px;
	gap: 20px;
`;

const CategoryItem = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	border-radius: 30px;
	background-color: #e8e8e8;
	white-space: nowrap;
`;

export default CategoryPage;
