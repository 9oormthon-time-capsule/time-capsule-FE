import { useState } from 'react';
import TodoMenu from '../main/TodoMenu';
import * as S from '../../../styles/todo/main/TodoHeader.style';

const TodoHeader = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<S.TodoHeaderContainer>
			<S.LogoContainer />
			<S.TodoHeaderTitle>"지현"님의 Todo</S.TodoHeaderTitle>
			<S.MenuContainer onClick={handleMenuOpen}>
				<img src="/main/Menu.svg" width={35} height={35} />
			</S.MenuContainer>
			{isMenuOpen ? <TodoMenu /> : null}
		</S.TodoHeaderContainer>
	);
};

export default TodoHeader;
