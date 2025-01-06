import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../components/common/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/timecapsule/MainPage.style';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useEffect } from 'react';
import { fetchUserData } from '../../api/user';

const MainPage = () => {
	const { userId } = useParams();
	const setUserInfo = useUserStore((state) => state.setUserInfo);

	useEffect(() => {
		const loadUserData = async () => {
			if(userId) {
				try {
					const userData = await fetchUserData(userId);
					setUserInfo(userId, userData.nickname, userData.profileImage);
				} catch (error) {
					console.error('Failed to load user data:', error);
				}
			}
		};

		loadUserData();
	}, [userId, setUserInfo]);

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
