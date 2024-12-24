import * as S from '../../styles/common/Menu.style';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	const menuItems = (() => {
		if (location.pathname.startsWith('/todo')) {
			return [
				{ path: '/main', label: '나의 타임캡슐' },
				{ path: '/todo/category/new', label: '카테고리 등록' },
				{ path: '/todo/category', label: '카테고리 관리' },
			]
		}
		else {
			return [
				{ path: '/todo', label: '나의 Todo'},				
				{ path: '/directory/:type/:userId', label: '나의 편지함'},				
			]
		} 
})();

	return (
		<S.MenuContainer>
			{menuItems.map((item) => (
				<S.MenuItem key={item.path} onClick={() => handleNavigate(item.path)}>
					{item.label}
				</S.MenuItem>
			))}
			<S.MenuItem>로그아웃</S.MenuItem>
		</S.MenuContainer>
	);
};

export default Menu;
