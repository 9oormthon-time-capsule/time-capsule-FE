import * as S from '../../../styles/todo/category/CategoryHeader.style';
import { useNavigate } from 'react-router-dom';

const CategoryHeader = ({
	title,
	button,
}: {
	title: string;
	button: string;
}) => {
	const nav = useNavigate();

	const handleBackNav = () => {
		nav(-1);
	};

	const toRegisterPage = () => {
		nav('/todo/category/new');
	};

	return (
		<S.HeaderContainer>
			<S.BackSection onClick={handleBackNav}>{'<'}</S.BackSection>
			<S.TitleSection>{title}</S.TitleSection>
			<S.ButtonSection isPlus={button === '+'} onClick={toRegisterPage}>
				{button}
			</S.ButtonSection>
		</S.HeaderContainer>
	);
};

export default CategoryHeader;
