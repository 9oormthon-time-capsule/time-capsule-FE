import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as S from '../../styles/common/Header.style';
import Menu from './Menu';
import { useUserStore } from '../../store/userStore';

const Header = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const nickname = useUserStore((state) => state.nickname);
	const isTodo = location.pathname.startsWith('/todo');

	const getTitle = () => {
		if(location.pathname.startsWith('/main')) return `"${nickname}"님의 타임캡슐`;
		if(location.pathname.startsWith('/todo')) return `"${nickname}"님의 할 일 목록`;
	}

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	}

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<S.HeaderContainer>
			<S.LogoContainer isTodo={isTodo}>Time Capsule</S.LogoContainer>
			<S.HeaderTitle isTodo={isTodo}>{getTitle()}</S.HeaderTitle>
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
