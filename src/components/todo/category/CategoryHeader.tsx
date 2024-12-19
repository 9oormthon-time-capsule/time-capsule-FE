import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CategoryHeader = ({ title, button }: { title: string; button: string }) => {
	const nav = useNavigate();

	const handleBackNav = () => {
		nav(-1);
	}

	const toRegisterPage = () => {
		nav('/todo/category/new');
	}

	return (
		<Wrapper>
			<BackSection onClick={handleBackNav}>{'<'}</BackSection>
			<TitleSection>{title}</TitleSection>
			<ButtonSection isPlus={button === '+'} onClick={toRegisterPage}>{button}</ButtonSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 180px;
`;

const BackSection = styled.div`
	font-size: 30px;
	cursor: pointer;
`;

const TitleSection = styled.div`
	font-size: 23px;
	font-weight: bold;
`;

const ButtonSection = styled.div`
	font-size: ${({ isPlus }) => (isPlus ? '40px' : '20px')};
	font-weight: ${({ isPlus }) => (isPlus ? '400' : '600')};
	cursor: pointer;
`;

export default CategoryHeader;
