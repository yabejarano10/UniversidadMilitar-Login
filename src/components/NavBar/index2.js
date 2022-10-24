import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Navbtn, NavbtnLink, ImgWrap, Img, NavLinkp, NavLinka} from './NavVarElements';
import { animateScroll as scroll } from 'react-scroll';
import { auth } from '../../firebase/firebase.utils';


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

const Navbar2 = ({toggle,currentUser}) => {
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
                <NavLinkp to="/"onClick={exam}>Objetivos</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/" onClick={scrmv}>Misión/Visión</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/"onClick={scrli}>Lineas Inv.</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/investigadores" onClick={toggleHome}>Investigadores</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/semilleros" onClick={toggleHome}>Semilleros</NavLinkp>
            </NavItem>
            <NavItem>
                <NavLinkp to="/registrese">Registrese</NavLinkp>
            </NavItem>
            <NavItem>
              <NavLinka href="mailto:tigum@unimilitar.edu.co" target="_blank">Contáctenos</NavLinka>
            </NavItem>
        </NavMenu>
        {
          currentUser ? 
          <Navbtn>
            <NavbtnLink onClick={() => auth.signOut()} to="/">Sign Out</NavbtnLink>
          </Navbtn> 
          :
          <Navbtn>
            <NavbtnLink to="/signin">Sign in</NavbtnLink>
          </Navbtn>
        }
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar2