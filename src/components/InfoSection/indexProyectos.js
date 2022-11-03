import React from 'react'
import hearthy from '../../images/hearthy.svg'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './infoElementsProyectos';

const ProyectosSection = ({ titulo, descripcion, enlace,autores,claveAcceso,institucion,imagen}) => {
  return (
    <>
    <InfoContainer lightBg={false} id={"proyecto"}>
        
        <InfoWrapper id={"container"}>
            <InfoRow imgStart={false}>
                <Column1 id={"data"}>
                <TextWrapper>
                    <TopLine lightBg={false}>
                        {'Titulo'}
                    </TopLine>
                    <Heading lightText={true}>{titulo}</Heading>
                    <TopLine lightBg={false}>
                        {'Descripcion'}
                    </TopLine>
                    <Subtitle darkText={false}>{descripcion}</Subtitle>
                    <TopLine lightBg={false}>
                        {'Autores'}
                    </TopLine>
                    <Subtitle darkText={false}>{autores}</Subtitle>
                    <TopLine lightBg={false}>
                        {'Institución'}
                    </TopLine>
                    <Subtitle darkText={false}>{institucion}</Subtitle>
                    <TopLine lightBg={false}>
                        {'Enlace'}
                    </TopLine>
                    <Subtitle darkText={false}>
                    <a href={enlace} target="_blank" style={{color:"white"}}>{enlace}</a>
                    </Subtitle>
                    <TopLine lightBg={false}>
                        {'Clave de Acceso'}
                    </TopLine>
                    <Subtitle darkText={false}>{claveAcceso}</Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={imagen} alt={'Data'}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default ProyectosSection