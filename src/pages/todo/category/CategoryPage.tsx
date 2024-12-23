import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import { Container, CategoryList, CategoryItem } from '../../../styles/todo/category/Category.style';

const CategoryPage = () => {
	return (
		<Container>
			<CategoryHeader title="카테고리" button="+" />
			<CategoryList>
				<CategoryItem>개인 학습</CategoryItem>
				<CategoryItem>중요 일정</CategoryItem>
				<CategoryItem>약속</CategoryItem>
			</CategoryList>
		</Container>
	);
};



export default CategoryPage;
