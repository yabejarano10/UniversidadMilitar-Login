import React from 'react'
import Icon1 from'../../images/data1.svg';
import Icon2 from'../../images/personal.svg'
import Icon3 from'../../images/medicine.svg'
import Icon4 from '../../images/data2.svg'
import Icon5 from '../../images/team.svg'
import Icon6 from '../../images/iot.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'



const Services = () => {
  return (
    <>
    <ServicesContainer id = 'services'>
        <ServicesH1>Lineas de Investigación</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Big Data Analytics</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Biomecánica e Ingenieria de Rehabilitación</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Gestión hospitalaria</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Procesamiento de señales, datos, imagen y video</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Tele-Cardiología y prevención</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Telemetria (IoT-Routing)</ServicesH2>
                <ServicesP>------------------------</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services