import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../components/common/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/timecapsule/MainPage.style';
import { useUserStore } from '../../store/userStore';
import { useEffect, useState } from 'react';
import { fetchUserData } from '../../api/user';
import { fetchLetterCount } from '../../api/letter';

const MainPage = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const [letterCount, setLetterCount] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUserData();
        setUserInfo(userData.name, userData.profileImage);
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };

    const loadLetterCount = async () => {
      try {
        const count = await fetchLetterCount();
        setLetterCount(count);
      } catch (error) {
        console.error('Failed to fetch letter count:', error);
      }
    };

    loadUserData();
    loadLetterCount();
  }, [setUserInfo]);

  return (
    <S.MainContainer>
      <MainLayout>
        <Header />
        <S.MainContent>
          <CapsuleBox letterCount={letterCount} />
          <LetterCreateButton />
        </S.MainContent>
      </MainLayout>
    </S.MainContainer>
  );
};

export default MainPage;