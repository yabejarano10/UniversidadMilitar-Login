import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Navbtn, NavbtnLink, ImgWrap, Img, NavLinkp, NavLinka} from './NavVarElements';
import { animateScroll as scroll } from 'react-scroll';
import { auth } from '../../firebase/firebase.utils';


const toggleHome = () =>
{
  scroll.scrollToTop();
  
}
const Navbar = ({toggle,currentUser}) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>TIGUM</NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="about"
                  smooth={true} duration={500} spy={true} exact='true' offset={-50}
                >Objetivos</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="discover"
                smooth={true} duration={500} spy={true} exact='true' offset={-50}
                >Misión/Visión</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="services"
                smooth={true} duration={500} spy={true} exact='true' offset={-50}
                >Lineas Inv.</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinkp to="/investigadores" onClick={toggleHome}>Investigadores</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/semilleros" onClick={toggleHome}>Semilleros</NavLinkp>
            </NavItem>
            {currentUser?
              <NavItem>
              <NavLinkp to="/proyectos" onClick={toggleHome}>Proyectos</NavLinkp>
              </NavItem>
            :
            <NavItem>
            <NavLinkp to="/registrese" onClick={toggleHome}>Registrese</NavLinkp>
            </NavItem>}
            <NavItem>
              <NavLinka href="mailto:tigum@unimilitar.edu.co" target="_blank">Contáctenos</NavLinka>
            </NavItem>
        </NavMenu>
        {
          currentUser ? 
          <Navbtn>
            <NavbtnLink onClick={() => auth.signOut()} to="/">Cerrar Sesión</NavbtnLink>
          </Navbtn> 
          :
          <Navbtn>
            <NavbtnLink to="/signin">Iniciar Sesión</NavbtnLink>
          </Navbtn>
        }
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
