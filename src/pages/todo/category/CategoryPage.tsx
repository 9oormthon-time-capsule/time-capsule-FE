import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import MainLayout from '../../../layout/MainLayout';
import * as S from '../../../styles/todo/category/Category.style';

const CategoryPage = () => {
	return (
		<MainLayout>
			<CategoryHeader title="카테고리" button="+" />
			<S.CategoryList>
				<S.CategoryItem>개인 학습</S.CategoryItem>
				<S.CategoryItem>중요 일정</S.CategoryItem>
				<S.CategoryItem>약속</S.CategoryItem>
			</S.CategoryList>
		</MainLayout>
	);
};

export default CategoryPage;
