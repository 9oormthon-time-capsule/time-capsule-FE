import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import * as S from '../../../styles/todo/category/CategoryRegister.style';
import { useState } from 'react';

const CategoryRegister = () => {
	const [isOpen, setIsOpen] = useState(false);

	const colors = [
		'#000000',
		'#FF6F6F',
		'#FFA26F',
		'#FFFF6F',
		'#6FFF6F',
		'#6F9FFF',
		'#6F6FFF',
		'#9F6FFF',
		'#FFFFFF',
	];

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<S.CategoryRegisterContainer>
			<CategoryHeader title="카테고리 등록" button="완료" />
			<S.CategoryFormWrapper>
				<S.CategoryInput placeholder="카테고리 입력" />
				<S.UnderLine />
				<S.ColorContainer>
					<span>색상</span>
					<S.DropdownButton onClick={handleOpen}>
						색상 선택 {isOpen ? '▲' : '▼'}
						{isOpen && (
							<S.DropdownMenu>
								{colors.map((color) => (
									<S.DropdownItem key={color} color={color} />
								))}
							</S.DropdownMenu>
						)}
					</S.DropdownButton>
				</S.ColorContainer>
			</S.CategoryFormWrapper>
		</S.CategoryRegisterContainer>
	);
};

export default CategoryRegister;
