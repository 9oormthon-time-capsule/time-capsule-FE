import * as S from '../styles/layout/Header.style';

const Header = () => {
	return (
		<S.HeaderContainer>
			<S.LogoContainer />
			<S.HeaderTitle>"지현"님의 타임캡슐</S.HeaderTitle>
			<S.MenuContainer>
				<img src="/main/Menu.svg" width={35} height={35} />
			</S.MenuContainer>
		</S.HeaderContainer>
	);
};

export default Header;
