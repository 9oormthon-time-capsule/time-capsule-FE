import styled from 'styled-components';

export const ReflectDetailContainer = styled.div`
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 80px auto;
	width: 90%;
`;

export const BackButton = styled.button`
	align-self: flex-start;
	font-size: 24px;
	border: none;
	background: transparent;
	cursor: pointer;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 30px;
	margin-top: 80px;
`;

export const ReflectContent = styled.div`
	background-image: url('capsule_letterbackimg.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 10px;
	padding: 180px;
	margin-top: -100px;
	width: 800px;
	height: 1000px;
	position: relative;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ToText = styled.p`
	font-weight: bold;
	margin-bottom: 10px;
	position: absolute;
	top: 180px;
	left: 130px;
`;

export const BodyText = styled.p`
	margin: 60px 0;
	line-height: 1.6;
`;

export const FromText = styled.p`
	margin-top: 20px;
	margin-right: -50px;
	font-weight: bold;
	text-align: right;
	font-style: italic;
`;

export const DownloadButton = styled.button`
	padding: 20px 60px;
	background: linear-gradient(135deg, #4caf50, #2e7d32);
	color: white;
	font-size: 20px;
	font-weight: bold;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-top: 60px;

	&:hover {
		background: linear-gradient(135deg, #2e7d32, #1b5e20);
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(0);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	}

	&:focus {
		outline: 2px solid #66bb6a;
		outline-offset: 2px;
	}
`;
