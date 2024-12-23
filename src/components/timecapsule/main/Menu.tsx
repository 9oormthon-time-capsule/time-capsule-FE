import styled from "styled-components"

const Menu = () => {
  return (
    <MenuContainer>
        <MenuItem>나의 Todo</MenuItem>
        <MenuItem>나의 편지함</MenuItem>
        <MenuItem>로그아웃</MenuItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 140px;
	right: 40px;
    gap: 30px;
`

const MenuItem = styled.button`
    padding: 15px 20px;
    color: black;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid lightgray;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        background-color: gray;
        color: white;
    }
`

export default Menu