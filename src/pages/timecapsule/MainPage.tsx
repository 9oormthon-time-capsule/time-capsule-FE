import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../components/common/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import MainLayout from '../../layout/MainLayout';
import * as S from '../../styles/timecapsule/MainPage.style';
import { useUserStore } from '../../store/userStore';
import { useEffect } from 'react';
import useLetterData from '../../hooks/useLetterData';
import Loading from '../../components/common/Loading';
import useUser from '../../hooks/useUser';

const MainPage = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const { letterQuery } = useLetterData('타임캡슐');
  const letterCount = letterQuery.data.length;

  const { userDataQuery } = useUser();
  const userData = userDataQuery.data;

  useEffect(() => {
    if (userData) {
      setUserInfo(userData.name, userData.profileImage);
    }
  }, [userData, setUserInfo]);

  if (
    letterQuery.isLoading ||
    letterQuery.isFetching ||
    userDataQuery.isLoading
  )
    return <Loading />;

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
