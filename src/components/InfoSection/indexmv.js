import React from 'react'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElementsMV';

const InfoSectionmv = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading lightText={lightText}>Misión</Heading>
                    <Subtitle darkText={darkText}>
                    El grupo TIGUM de la Universidad Militar Nueva Granada, es un equipo de trabajo conformado por docentes y estudiantes investigadores, que encaminan sus esfuerzos en la investigación y desarrollo de redes y medios de comunicación de señales biológicas a distancia, con el fin de participar en el aumento gradual de la calidad de vida de los colombianos.
                    </Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading lightText={lightText}>Visión</Heading>
                    <Subtitle darkText={darkText}>
                    El grupo TIGUM de la Universidad Militar Nueva Granada, a corto plazo será un grupo de investigación y desarrollo clasificado por Colciencias, medio académico de difusión y divulgación de los avances científicos, a mediano plazo publicará en ediciones científicas, con participación activa en eventos académicos nacionales e Internacionales.
                    </Subtitle>
                </TextWrapper>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSectionmv