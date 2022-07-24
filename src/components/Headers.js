import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"


const NavBar = styled.nav`
height: 60px;
background: transparent;
padding: 0rem calc((100vw - 1300px) / 2);
display: flex;
align-items: center;
justify-content: space-between;
`

const Logo = styled(Link)`
color: #fff;
text-decoration: none;
padding-left: 1rem;
font-size: 1.5rem;
font-weight: bold;
font-style: italic;
`

const NavBarItems = styled.div`


`
const NavBarLink = styled(Link)`
color: #fff;
text-decoration: none;
padding: 1rem;
`

const Headers = () => {
  return (
    <NavBar>
        <Logo to= "/">Animals Cou</Logo>
        <NavBarItems>
          <NavBarLink to= "/">Home</NavBarLink>
          <NavBarLink to= "/About">About</NavBarLink>
          <NavBarLink to= "/Services">Services</NavBarLink>
        </NavBarItems>
    </NavBar>
  )
}

export default Headers