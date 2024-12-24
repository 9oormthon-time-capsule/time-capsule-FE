import { useLocation } from 'react-router-dom';
import * as S from '../../styles/layout/Header.style';

const Header = () => {
	const location = useLocation();

	const getTitle = () => {
		if(location.pathname.startsWith('/main')) return `"지현"님의 타임캡슐`;
		if(location.pathname.startsWith('/todo')) return `"지현"님의 할 일 목록`;
	}
	return (
		<S.HeaderContainer>
			<S.LogoContainer />
			<S.HeaderTitle>{getTitle()}</S.HeaderTitle>
			<S.MenuContainer>
				<img src="/main/Menu.svg" width={35} height={35} />
			</S.MenuContainer>
		</S.HeaderContainer>
	);
};

export default Header;
