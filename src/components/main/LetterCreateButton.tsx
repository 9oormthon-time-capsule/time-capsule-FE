import styled from 'styled-components';

const LetterCreateButton = () => {
	return (
		<Wrapper>
			<ButtonFrame>
				<img src="/main/Plus.svg" width={35} height={35} />
			</ButtonFrame>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: fixed;
	bottom: 20px;
	right: 50px;
	z-index: 100;
`;

const ButtonFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	border-radius: 100%;
	background-color: lightgray;
	cursor: pointer;
`;

export default LetterCreateButton;
