import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	color: white;
	padding: 10px;
	border-radius: 10px;
	font-size: 16px;
	margin-bottom: 2rem;
	background-color: ${({ color }) => color || '#222222'};
	box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
`;

export default function CustomButton({ text, color }) {
	return <Button color={color}>{text}</Button>;
}
