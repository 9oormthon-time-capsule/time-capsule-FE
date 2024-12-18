import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
        <LogoContainer />
        <TitleContainer>"지현"님의 타임캡슐</TitleContainer>
        <MenuContainer><img src="/main/Menu.svg" width={35} height={35} /></MenuContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
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
export default Header