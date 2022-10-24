import React from 'react'
import Semilleros from '../../pages/semilleros';
import test from '../../images/femaleavy.svg';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './infoElementsSemilleros';

const SemillerosSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, inves, img, alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine lightBg={lightBg}>
                        {topLine}
                    </TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <Subtitle darkText={darkText}>
                    Departamento: Ingenieria en Telecomunicaciones  
                    </Subtitle>
                    <Subtitle darkText={darkText}>Sede: Calle 100 </Subtitle>
                    <Subtitle darkText={darkText}>Lider del Semillero: Leonardo Lopez Ramirez</Subtitle>
                    <Subtitle darkText={darkText}>Fecha de Creacion: 01/01/2007</Subtitle>
                    <Subtitle darkText={darkText}>Grupo de investigacion : TIGUM</Subtitle>
                    <Subtitle darkText={darkText}>{inves}</Subtitle>
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

export default SemillerosSection