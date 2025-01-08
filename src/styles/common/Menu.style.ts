import styled from 'styled-components';

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 120px;
	right: 150px;
	gap: 30px;
	z-index: 100;
`;

export const MenuItem = styled.button`
	padding: 15px 20px;
	color: black;
	font-size: 18px;
	font-weight: 600;
	border: 2px solid lightgray;
	border-radius: 50px;
	background-color: white;
	cursor: pointer;

	&:hover {
		background-color: gray;
		color: white;
	}
`;
