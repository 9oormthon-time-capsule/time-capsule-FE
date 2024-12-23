import CategoryHeader from '../../../components/todo/category/CategoryHeader';
import { Container, Wrapper, CategoryInput, UnderLine, ColorContainer, DropdownButton, DropdownMenu, DropdownItem } from '../../../styles/todo/category/CategoryRegister.style';
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
		<Container>
			<CategoryHeader title="카테고리 등록" button="완료" />
			<Wrapper>
				<CategoryInput placeholder="카테고리 입력" />
				<UnderLine />
				<ColorContainer>
					<span>색상</span>
					<DropdownButton onClick={handleOpen}>
						색상 선택 {isOpen ? '▲' : '▼'}
						{isOpen && (
							<DropdownMenu>
								{colors.map((color) => (
									<DropdownItem key={color} color={color} />
								))}
							</DropdownMenu>
						)}
					</DropdownButton>
				</ColorContainer>
			</Wrapper>
		</Container>
	);
};

export default CategoryRegister;
