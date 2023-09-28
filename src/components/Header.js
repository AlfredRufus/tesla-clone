import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
  return (
    <div>
        <Container>
          <a>
            <img src="/images/logo.svg" alt=""/>
          </a>
          <Menu>
              <p><a href="#">Models</a></p>
              <p><a href="#">Accessories</a></p>
              <p><a href="#">Solar</a></p>
              <p><a href="#">Learn More</a></p> 
          </Menu>
          <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Account</a>
              <CustomMenu/>
          </RightMenu>
          
        </Container>
    </div>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding:  0 20px;
  top: 0;
  left:0;
  right:0;
  justify-content:space-between;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  @media(max-width: 768px){
    display:none;
  }
  margin-left:110px;
  a{
    
    padding: 0 10px;
    flex-wrap: nowrap;
    font-weight:500;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
a{
    
  padding: 0 10px;
  flex-wrap: nowrap;
  font-weight:600;
}
`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
export default Header