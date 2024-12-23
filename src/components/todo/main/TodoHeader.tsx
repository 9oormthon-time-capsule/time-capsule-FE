import styled from "styled-components"
import { useState } from "react";
import TodoMenu from "../main/TodoMenu";

const TodoHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <Wrapper>
        <LogoContainer />
        <TitleContainer>"지현"님의 Todo</TitleContainer>
        <MenuContainer onClick={handleMenuOpen}><img src="/main/Menu.svg" width={35} height={35} /></MenuContainer>
        {isMenuOpen ? (
            <TodoMenu />
        ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    
  max-width: 1200px;
  min-width: 700px;

  margin: 30px auto;
`

const LogoContainer = styled.div`
    width: 80px;
    height: 60px;
    background-color: lightgray;
`

const TitleContainer = styled.div`
    width: auto;
    height: 25px;
    margin-left: 25px;
    font-size: 24px;
    font-weight: 600;
    color: black;
`

const MenuContainer = styled.div`
    margin-left: auto;
    cursor: pointer;
`
export default TodoHeader