import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  top: 1rem;

  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    flex-direction: column;
  }
`;

interface StyledProps {
  isTodo?: boolean;
}

export const LogoContainer = styled.div<StyledProps>`
  width: auto;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => (props.isTodo ? 'beige' : 'black')};
`;

export const HeaderTitle = styled.div<StyledProps>`
  width: auto;
  margin-left: 25px;
  font-size: 1.5rem;
  color: ${(props) => (props.isTodo ? 'beige' : 'black')};
`;

export const MenuContainer = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;

  img {
    filter: ${(props) => (props.isTodo ? 'invert(0)' : 'invert(1)')};
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

export const ChangeButton = styled.button`
  margin-left: 1rem;
  padding: 0.37rem 1rem;
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
