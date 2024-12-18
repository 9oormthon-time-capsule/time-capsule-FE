import styled from 'styled-components';
import CategoryHeader from '../../../components/todo/category/CategoryHeader';
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
		<>
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
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 150px;
`;

const CategoryInput = styled.input`
	width: 100%;
	padding: 5px;
	font-size: 20px;
	border: none;
`;

const ColorContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 5px;
	font-size: 20px;
	border: none;
	margin-top: 30px;
`;

const UnderLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: gray;
`;

const DropdownButton = styled.button`
	padding: 10px 20px;
	cursor: pointer;
`;

const DropdownMenu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	list-style: none;
	margin-top: 15px;
	gap: 20px;
`;

const DropdownItem = styled.li<{ color: string }>`
	width: 25px;
	height: 25px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 1px 4px rgba(0, 0, 0, 0.1);
	}
`;

export default CategoryRegister;
