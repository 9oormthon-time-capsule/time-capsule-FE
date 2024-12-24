import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	overflow: hidden;
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	gap: 50px;
	flex-grow: 1;
	max-width: 1200px;
	width: 100%;
	height: calc(100vh - 100px);
	box-sizing: border-box;
	margin-top: 70px;
`;
