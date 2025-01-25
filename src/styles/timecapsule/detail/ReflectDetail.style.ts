import styled from 'styled-components';

export const ReflectDetailContainer = styled.div`
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
`;

export const StartsBackground = styled.div`
 	
`

export const BackButton = styled.button`
	align-self: flex-start;
	font-size: 20px;
	background: transparent;
	cursor: pointer;
	border: 1px solid;
	border: none;
	border-radius: 50%;
	color: white;
	background: linear-gradient(135deg, #4caf50, #2e7d32);
	padding: 6px 10px;

	&:hover {
		background: linear-gradient(135deg, #2e7d32, #1b5e20);
		transform: translateX(-3px);
	}
`;

export const Title = styled.h1`
	font-size: 26px;
	font-weight: bold;
	text-align: left;
	margin-bottom: 50px;
	margin-top: 0px;

	text-shadow: 
    1px 1px 0 white, 
   -1px 1px 0 white, 
    1px -1px 0 white, 
   -1px -1px 0 white;
`;

export const ReflectContent = styled.div`
	background-color: white;
	width: 1200px; height: 500px;
	border-radius: 20px;
`;

export const ToText = styled.p`
	font-weight: bold;
	margin-bottom: 10px;
	position: absolute;
	top: 180px;
	left: 130px;
`;

export const BodyText = styled.p`
	margin: 30px 20px;
	line-height: 1.0;
`;

export const FromText = styled.p`
	margin-top: 20px;
	margin-right: -50px;
	font-weight: bold;
	text-align: right;
	font-style: italic;
`;

export const DownloadButton = styled.button`
	padding: 15px 45px;
	background: linear-gradient(135deg, #4caf50, #2e7d32);
	color: white;
	font-size: 18px;
	font-weight: bold;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-top: 50px;

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
