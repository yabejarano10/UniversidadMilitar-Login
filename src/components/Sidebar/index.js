import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute, SidebarLinkp, SidebarLinka} from './SidebarElements';
import { animateScroll as scroll } from 'react-scroll';


const toggleHome = () =>
{
  scroll.scrollToTop();
}
const exam = () =>
{
  scroll.scrollTo(926,{smooth:true, duration:500, spy:true, exact:'true', offset:-50} )
}
const scrmv = () =>
{
  scroll.scrollTo(2027,{smooth:true, duration:500, spy:true, exact:'true', offset:-50} )
}
const scrli = () =>
{
  scroll.scrollTo(2886,{smooth:true, duration:500, spy:true, exact:'true', offset:-50} )
}


function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLinkp to ="/" onClick={exam}>Objetivos</SidebarLinkp>
                <SidebarLinkp to ="/" onClick={scrmv}> Misión/Visión</SidebarLinkp>
                <SidebarLinkp to ="/" onClick={scrli}>Lineas de Investigación</SidebarLinkp>
                <SidebarLinkp to="/investigadores" onClick={toggleHome}>Investigadores</SidebarLinkp>
                <SidebarLinkp to="/semilleros" onClick={toggleHome}>Semilleros</SidebarLinkp>
                <SidebarLinkp to="/registrese" onClick={toggleHome}>Registrese</SidebarLinkp>
                <SidebarLinka href="mailto:tigum@unimilitar.edu.co" target="_blank">Contáctenos</SidebarLinka>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to ='/signin'>Sign in </SidebarRoute>
            </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    
  )
}

export default Sidebar