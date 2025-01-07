import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../components/common/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/timecapsule/MainPage.style';
import { useParams } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { useEffect, useState } from 'react';
import { fetchUserData } from '../../api/user';
import { fetchLetterCount } from '../../api/letter';

const MainPage = () => {
  const { userId } = useParams();
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const [letterCount, setLetterCount] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      if (userId) {
        try {
          const userData = await fetchUserData(userId);
          setUserInfo(userId, userData.name, userData.profileImage);
        } catch (error) {
          console.error('Failed to load user data:', error);
        }
      }
    };

    const loadLetterCount = async () => {
      if(userId) {
        try {
          const count = await fetchLetterCount();
          setLetterCount(count);
        } catch (error) {
          console.error('Failed to fetch letter count:', error);
        }
      }
    }

    loadUserData();
    loadLetterCount();
  }, [userId, setUserInfo]);

  return (
    <MainLayout>
      <Header />
      <S.MainContainer>
        <CapsuleBox letterCount={letterCount}/>
        <LetterCreateButton />
      </S.MainContainer>
    </MainLayout>
  );
};

export default MainPage;
