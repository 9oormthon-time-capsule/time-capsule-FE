import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const TodoMenu = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <MenuContainer>
        <MenuItem onClick={() => handleNavigate("/main")}>타임캡슐</MenuItem>
        <MenuItem onClick={() => handleNavigate("/todo/category/new")}>카테고리 등록</MenuItem>
        <MenuItem onClick={() => handleNavigate("/todo/category")}>카테고리 관리</MenuItem>
        <MenuItem>로그아웃</MenuItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 140px;
	right: 65px;
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

export default TodoMenu