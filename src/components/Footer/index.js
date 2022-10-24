import React from 'react';

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap,
    WebsiteRights, FooterSubtitle, InfoRow, Column1, Column2, Img, ImgWrap, ImgWrap2} from './FooterElements';
    import { animateScroll as scroll } from 'react-scroll';
import { hover } from '@testing-library/user-event/dist/hover';

import logo40 from '../../images/logo40.png';
import logou from '../../images/logoUMNG.png';
import logosicon from '../../images/logosicontec.png';


    const toggleHome = () =>
    {
      scroll.scrollToTop();
    }

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Universidad Militar Nueva Granada</FooterLinkTitle>
                            <FooterSubtitle>Conmutadores: (57+1) 650 0000 (57+1) 634 3200</FooterSubtitle>
                            <FooterSubtitle>Opciones 1 y 2 para comunicarse con el CALL CENTER y solicitar información general</FooterSubtitle> 
                            <FooterSubtitle>Linea gratuita nacional: 01 8000 111019</FooterSubtitle>
                            <FooterSubtitle>ㅤ</FooterSubtitle>
                            <FooterSubtitle>Solicitud de información</FooterSubtitle>
                            <FooterSubtitle>atencionalciudadano@unimilitar.edu.co</FooterSubtitle>
                            <FooterSubtitle>Notificaciones judiciales:</FooterSubtitle>
                            <FooterSubtitle>juridica@unimilitar.edu.co </FooterSubtitle>
                            <FooterSubtitle>ㅤ</FooterSubtitle>
                            <FooterSubtitle>Correo Físico: Carrera 11 No 101-80(Bogotá, Colombia) Archivo y correspondencia</FooterSubtitle>
                            <a href='https:/inicio/www.umng.edu.co/' style={{ textDecoration: 'none', color: '#fff',fontSize: '14px', lineHeight: '24px' }}>Sitio web Universidad Militar</a>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Sede Bogotá</FooterLinkTitle>
                        <FooterSubtitle>Carrera 11 n.° 101-80 (Bogotá, Colombia) Horario de atención: Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</FooterSubtitle>
                        <FooterSubtitle>Facultad de Medicina y Ciencias de la Salud</FooterSubtitle>
                        <FooterSubtitle>Transversal 3 n.° 49-00</FooterSubtitle>
                        <FooterSubtitle>Horario de atención: Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</FooterSubtitle>
                        <FooterSubtitle>ㅤ</FooterSubtitle>
                        <FooterSubtitle>Sede Posgrados  calle 94 A # 13 - 54 Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</FooterSubtitle>
                        <FooterSubtitle>ㅤ</FooterSubtitle>
                        <FooterSubtitle>Sede Campus Nueva Granada</FooterSubtitle>
                        <FooterSubtitle>kilómetro 2, vía Cajicá-Zipaquirá</FooterSubtitle>
                        <FooterSubtitle>Horario de atención: Lunes a viernes, de 8:00 a. m. a 5:00 p. m.</FooterSubtitle>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <InfoRow imgStart={false}>
                            <Column1>
                                <ImgWrap>
                                    <Img src={logou} alt='lOGO UMNG'/>
                                </ImgWrap>

                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={logo40} alt='logo 40'/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                        <Column1>
                                <ImgWrap2>
                                    <Img src={logosicon} alt='lOGOS icontec'/>
                                </ImgWrap2>

                        </Column1>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                {/* <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> TITULOS RANDOM</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">otrolink random</FooterLink>
                            <FooterLink to="/signin">mas links randoms</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> TITULOS RANDOM</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">otrolink random</FooterLink>
                            <FooterLink to="/signin">mas links randoms</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper> */}
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>TIGUM</SocialLogo>
                    <WebsiteRights>Institución de educación superior, Vigilada Mineducación " Decreto 1075 del 26 de mayo de 2015" Código SNIES 1117</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer