import * as S from '../styles/layout/MainLayout.style';

function MainLayout({ children }: { children: React.ReactNode }) {
	return <S.MainLayoutContainer>{children}</S.MainLayoutContainer>;
}

export default MainLayout;
