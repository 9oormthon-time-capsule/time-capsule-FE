import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../layout/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/timecapsule/MainPage.style';

const MainPage = () => {
	return (
		<MainLayout>
			<Header />
			<S.MainContainer>
				<CapsuleBox />
				<LetterCreateButton />
			</S.MainContainer>
		</MainLayout>
	);
};

export default MainPage;
