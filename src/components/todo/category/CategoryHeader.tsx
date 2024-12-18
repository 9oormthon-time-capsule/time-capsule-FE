import styled from 'styled-components';

const CategoryHeader = () => {
	return (
		<Wrapper>
			<BackSection>{'<'}</BackSection>
			<TitleSection>카테고리 등록</TitleSection>
			<ButtonSection>완료</ButtonSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	padding: 40px 100px;
`;

const BackSection = styled.div`
	font-size: 25px;
`;

const TitleSection = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const ButtonSection = styled.div`
	font-size: 18px;
`;

export default CategoryHeader;
