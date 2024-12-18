import CapsuleBox from '../../components/main/CapsuleBox';
import Header from '../../layout/Header';
import LetterCreateButton from '../../components/main/LetterCreateButton';
import styled from 'styled-components';

const MainPage = () => {
	return (
		<Wrapper>
			<Header />
			<MainWrapper>
				<CapsuleBox />
				<LetterCreateButton />
			</MainWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 50px;
	height: 100vh;
`;

const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export default MainPage;
