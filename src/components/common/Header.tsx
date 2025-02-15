import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as S from '../../styles/common/Header.style';
import Menu from './Menu';
import { useUserStore } from '../../store/userStore';

interface HeaderProps {
  pageType?: string;
}

const Header = ({ pageType }: HeaderProps) => {
  const location = useLocation();
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nickname = useUserStore((state) => state.nickname);
  const isTodo = location.pathname.startsWith('/main');

  const getTitle = () => {
    if (location.pathname.startsWith('/main'))
      return `${nickname}님의 타임캡슐`;
    if (location.pathname.startsWith('/todo'))
      return `${nickname}님의 할 일 목록`;
    if (location.pathname.startsWith('/directory'))
      return `${nickname} 님의 ${pageType} 보관함`;
  };

  const handleMainNav = () => {
    nav('/main');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    if (pageType === '일일회고') {
      nav('/directory/letter');
    } else {
      nav('/directory/reflect');
    }
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer isTodo={isTodo} onClick={handleMainNav}>
        Time Capsule
      </S.LogoContainer>
      <S.HeaderTitle isTodo={isTodo}>{getTitle()}</S.HeaderTitle>
      {location.pathname.startsWith('/directory') && (
        <S.ChangeButton onClick={handleButtonClick}>
          {pageType === '일일회고' ? '타임캡슐 보러가기' : '일일회고 보러가기'}
        </S.ChangeButton>
      )}
      <S.MenuContainer onClick={toggleMenu} isTodo={isTodo}>
        <img src="/main/Menu.svg" width={35} height={35} />
      </S.MenuContainer>
      {isMenuOpen && (
        <>
          <S.Overlay onClick={closeMenu} />
          <Menu />
        </>
      )}
    </S.HeaderContainer>
  );
};

export default Header;
