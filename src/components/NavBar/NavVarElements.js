import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height:56px;
margin-top:-80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
z-index: 10;
background-image: linear-gradient(30deg,#182b57 0%,#2d4d95 100%);

@media screen and(max-width:960px)
{
    transition 0.8s all ease;
}
`;

export const NavbarContainer =styled.div`
display:flex;
justify-content:space-between;
height:56px;
z-index: 1;
width: 100%;
padding 0 24 px;
max-width 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #d3963a;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`;

/* export const ImgWrap = styled.div`
    max-width: 555px;
    height: 56px;
`;

export const Img = styled.img`
    width:100%;
    height: 56px;
    margin: 0 0 10px 0;
    padding-right: 0;
`; */

export const MobileIcon=styled.div`
display: none;
@media screen and (max-width:1000px)
{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff; 
}
`;


export const NavMenu =styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 1000px)
{
    display: none;
}
`;

export const NavItem = styled.li`
height:56px;
`;

export const NavLinks =styled(LinkS)`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #ffb84c ;
}
`;

export const NavLinkp =styled(LinkR)`

color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #ffb84c ;
}
`;

export const NavLinka =styled.a`

color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #ffb84c ;
}
`;

export const Navbtn =styled.nav`
display:flex;
align-items: center;

@media screen and (max-width: 1000px)
{
    display:none;
}
`;

export const NavbtnLink =styled(LinkR)`
border-radius: 50px;
background: #d3963a;
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

$:hover
{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;