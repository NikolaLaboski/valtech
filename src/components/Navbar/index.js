import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
return (
   <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">valtech_</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='section1'>Section one</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='section2'>Section two</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='section3'>Section three</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='section4'>Section four</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn className="mediaNav">
            <input placeholder="Type text here" id="inputID" style = {{width: 190, height: 26, 
                borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px", }}/>
                <NavBtnLink to="search">
                    Search
                </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
   </> 
 );
}

export default Navbar;
