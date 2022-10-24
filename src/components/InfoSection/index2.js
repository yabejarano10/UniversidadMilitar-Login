import React from 'react'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';

const InfoSectionObj = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
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
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <Subtitle darkText={darkText}>
                    2. Motivar el desarrollo de la investigación e innovación tecnológica en el área de telemetría de señales biológicas. 
                    </Subtitle>
                    <Subtitle darkText={darkText}>
                    3. Proponer y desarrollar soluciones al área de telemedicina dada en cuatro aspectos primordiales: Cardiología, Gestión hospitalaria, Procesamiento de señales y Telemetría. 
                    </Subtitle>
                    <Subtitle darkText={darkText}>4. Impulsar la creación de nuevos semilleros de investigación, nacientes de grupos de estudio.</Subtitle>
                    <Subtitle darkText={darkText}>5. Participar en eventos académicos a nivel regional, nacional e internacional.</Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSectionObj