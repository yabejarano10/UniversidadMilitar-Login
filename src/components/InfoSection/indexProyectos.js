import React from 'react'
import hearthy from '../../images/hearthy.svg'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './infoElementsSemilleros';

const ProyectosSection = ({ titulo, descripcion, enlace}) => {
  return (
    <>
    <InfoContainer lightBg={false} id={"semilleros"}>
        <InfoWrapper>
            <InfoRow imgStart={false}>
                <Column1>
                <TextWrapper>
                    <TopLine lightBg={false}>
                        {'TIGUM'}
                    </TopLine>
                    <Heading lightText={true}>{titulo}</Heading>
                    <Subtitle darkText={false}>{descripcion}</Subtitle>
                    <Subtitle darkText={false}>
                    <a href={enlace} target="_blank" style={{color:"white"}}>{enlace}</a>
                    </Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={hearthy} alt={'Data'}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default ProyectosSection