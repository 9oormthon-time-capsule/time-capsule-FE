import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100px;
`;

export const LogoContainer = styled.div`
	width: auto;
	height: 25px;
	margin-left: 25px;
	font-size: 24px;
	font-weight: bold;
	color: ${(props) => (props.isTodo ? 'black' : 'beige')};
`;

export const HeaderTitle = styled.div`
	width: auto;
	height: 25px;
	margin-left: 25px;
	font-size: 24px;
	font-weight: 600;
	color: ${(props) => (props.isTodo ? 'black' : 'white')};
`;

export const MenuContainer = styled.div`
	margin-left: auto;
	cursor: pointer;
	z-index: 100;

	img {
		filter: ${(props) =>
			props.isTodo ? 'invert(1)' : 'invert(0)'};
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 99;
`;
