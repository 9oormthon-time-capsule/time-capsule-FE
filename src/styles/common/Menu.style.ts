import styled from 'styled-components';

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 120px;
	right: 150px;
	gap: 30px;
	z-index: 100;

	@media (max-width: 1400px) {
		right: 120px;
	}

	@media (max-width: 1360px) {
		right: 100px;
	}

	@media (max-width: 1320px) {
		right: 80px;
	}

	@media (max-width: 1280px) {
		right: 50px;
	}

	@media (max-width: 1220px) {
		right: 35px;
	}
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
