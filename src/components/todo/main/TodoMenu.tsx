import { useNavigate } from 'react-router-dom';
import * as S from '../../../styles/todo/main/TodoMenu.style';

const TodoMenu = () => {
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<S.MenuContainer>
			<S.MenuItem onClick={() => handleNavigate('/main')}>타임캡슐</S.MenuItem>
			<S.MenuItem onClick={() => handleNavigate('/todo/category/new')}>
				카테고리 등록
			</S.MenuItem>
			<S.MenuItem onClick={() => handleNavigate('/todo/category')}>
				카테고리 관리
			</S.MenuItem>
			<S.MenuItem>로그아웃</S.MenuItem>
		</S.MenuContainer>
	);
};

export default TodoMenu;
