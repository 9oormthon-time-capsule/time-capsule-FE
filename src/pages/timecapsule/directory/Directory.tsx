import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../../layout/MainLayout';
import Menu from '../../../components/common/Menu';
import * as S from '../../../styles/timecapsule/directory/Directory.style';
import CapsuleContainer from '../../../components/timecapsule/directory/Capsules';
import { useUserStore } from '../../../store/userStore';
import { fetchLetterData } from '../../../api/directoryLetter';
import { handleButtonClick } from './directoryButtonUtil';

interface IDirectory {
  pageType: string;
}

const Directory = ({ pageType }: IDirectory) => {
  const navigate = useNavigate();
  const nickname = useUserStore((state) => state.nickname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [letterData, setLetterData] = useState([]);
  const [directoryState, setDirectoryState] = useState({
    pageType,
    buttonLabel:
      pageType === '일일회고' ? '타임캡슐 보러가기' : '일일회고 보러가기',
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchLetterData(directoryState.pageType);
      setLetterData(data);
    };
    loadData();
  }, [directoryState.pageType]);

  return (
    <MainLayout>
      <S.Header>
        <S.LeftBox>
          <S.LogoText href="/main">Time Capsule</S.LogoText>
          <S.TitleText>
            {nickname} 님의 {directoryState.pageType} 보관함
          </S.TitleText>
          <S.ChangeButton
            onClick={() =>
              handleButtonClick(directoryState, setDirectoryState, navigate)
            }
          >
            {directoryState.buttonLabel}
          </S.ChangeButton>
        </S.LeftBox>
        <S.RightBox>
          <S.MenuImg
            src="/header/menu.svg"
            width={35}
            height={35}
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <>
              <S.Overlay onClick={closeMenu} />
              <Menu type="directory" />
            </>
          )}
        </S.RightBox>
      </S.Header>
      <CapsuleContainer
        letterData={letterData}
        pageType={directoryState.pageType}
      />
    </MainLayout>
  );
};

export default Directory;
