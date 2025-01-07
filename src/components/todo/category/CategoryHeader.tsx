import * as S from '../../../styles/todo/category/CategoryHeader.style';
import { useNavigate } from 'react-router-dom';

const CategoryHeader = ({
	title,
	button,
	onSubmit,
}: {
	title: string;
	button: string;
	onSubmit?: () => void;
}) => {
	const nav = useNavigate();

	const handleBackNav = () => {
		nav(-1);
	};

	const handleButtonClick = async () => {
		if (button === '완료') {
			if (onSubmit) {
				onSubmit();
			}
		} else {
			toRegisterPage();
		}
	};


	const toRegisterPage = () => {
		nav('/todo/category/new');
	};

	return (
		<S.HeaderContainer>
			<S.BackSection onClick={handleBackNav}>{'<'}</S.BackSection>
			<S.TitleSection>{title}</S.TitleSection>
			<S.ButtonSection isPlus={button === '+'} onClick={handleButtonClick}>
				{button}
			</S.ButtonSection>
		</S.HeaderContainer>
	);
};

export default CategoryHeader;
