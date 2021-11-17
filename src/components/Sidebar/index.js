import React from 'react'
import { SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="section1" onClick={toggle}>Section one</SidebarLink>
                    <SidebarLink to="section2" onClick={toggle}>Section two</SidebarLink>
                    <SidebarLink to="section3" onClick={toggle}>Section three</SidebarLink>
                    <SidebarLink to="section4" onClick={toggle}>Section four</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/search'>Search</SidebarRoute>
                </SideBtnWrap>            
            </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar;