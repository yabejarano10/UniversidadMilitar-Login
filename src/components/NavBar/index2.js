import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Navbtn, NavbtnLink, ImgWrap, Img, NavLinkp, NavLinka} from './NavVarElements';
import { animateScroll as scroll } from 'react-scroll';
import { auth } from '../../firebase/firebase.utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toggleHome = () =>
{
  scroll.scrollToTop();
}
const LogOut = () => {
  auth.signOut();
  toast.success("Cerró Sesión Con éxito",{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

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
            <NavbtnLink onClick={LogOut} to="/">Cerrar Sesión</NavbtnLink>
          </Navbtn> 
          :
          <Navbtn>
            <NavbtnLink to="/signin">Iniciar Sesión</NavbtnLink>
          </Navbtn>
        }
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"/>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar2