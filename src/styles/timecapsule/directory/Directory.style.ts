import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 35px 0;

  background-color: #ffffff;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  gap: 1rem;
`;

export const LogoText = styled.a`
  font-size: 1.5em;
  font-weight: bold;
`;

export const TitleText = styled.span`
  font-size: 1.2em;
  text-align: center;
`;

export const ChangeButton = styled.button`
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.825rem;

  font-size: 1em;
  font-weight: 600;
  background-color: #dadada;

  cursor: pointer;

  &:hover {
    background-color: #cacaca;
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuImg = styled.img`
  cursor: pointer;
`;

export const CapsuleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 1.5rem;
  padding-top: 4rem;
`;

export const CapsuleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CapsuleLabelBox = styled.div`
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.825rem;

  font-size: 1.1em;
  font-weight: 600;
  background-color: #eee;
`;

export const CapsuleLabel = styled.span`
  margin-top: 10px;
  font-weight: bold;
`;

export const CapsuleImg = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  object-fit: cover;
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
