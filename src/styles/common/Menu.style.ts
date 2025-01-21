import styled from 'styled-components';

interface MenuContainerProps {
  type: 'directory' | 'default';
}

export const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => {
    return props.type === 'directory' ? '120px' : '450px';
  }};
  right: ${(props) => {
    return props.type === 'directory' ? '40px' : '0px';
  }};
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
