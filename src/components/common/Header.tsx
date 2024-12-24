import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as S from '../../styles/common/Header.style';
import Menu from './Menu';

const Header = () => {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const getTitle = () => {
		if(location.pathname.startsWith('/main')) return `"지현"님의 타임캡슐`;
		if(location.pathname.startsWith('/todo')) return `"지현"님의 할 일 목록`;
	}

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	}

	return (
		<S.HeaderContainer>
			<S.LogoContainer />
			<S.HeaderTitle>{getTitle()}</S.HeaderTitle>
			<S.MenuContainer onClick={toggleMenu}>
				<img src="/main/Menu.svg" width={35} height={35} />
			</S.MenuContainer>
			{isMenuOpen && <Menu />}
		</S.HeaderContainer>
	);
};

export default Header;
