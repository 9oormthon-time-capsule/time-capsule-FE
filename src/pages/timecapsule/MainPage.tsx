import CapsuleBox from '../../components/timecapsule/main/CapsuleBox';
import Header from '../../layout/Header';
import LetterCreateButton from '../../components/timecapsule/main/LetterCreateButton';
import styled from 'styled-components';
import MainLayout from '../../layout/MainLayout';

const MainPage = () => {
  return (
    <MainLayout>
      <Header />
      <MainWrapper>
        <CapsuleBox />
        <LetterCreateButton />
      </MainWrapper>
    </MainLayout>
  );
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default MainPage;
