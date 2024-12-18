import styled from 'styled-components';

const CategoryHeader = ({ title, button }: { title: string; button: string }) => {
	return (
		<Wrapper>
			<BackSection>{'<'}</BackSection>
			<TitleSection>{title}</TitleSection>
			<ButtonSection>{button}</ButtonSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	padding: 40px 150px;
`;

const BackSection = styled.div`
	font-size: 25px;
`;

const TitleSection = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const ButtonSection = styled.div`
	font-size: 20px;
`;

export default CategoryHeader;
