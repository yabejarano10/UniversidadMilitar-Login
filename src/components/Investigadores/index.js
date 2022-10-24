import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper,ServicesWrapper2, ServicesCard, ServicesCardy, ServicesIcon, ServicesH2, ServicesP, ServicesCardy2 } from './InvestigadoresElements';
import Icon1 from'../../images/marcela.jpg';
import Icon2 from'../../images/astrid.jpg'
import Icon3 from'../../images/mauricio.jpg'
import Icon4 from '../../images/maleav.svg'
import Icon5 from '../../images/femaleav.svg'
import Icon6 from '../../images/femaleavy.svg'
import Icon7 from '../../images/maleavy.svg'

const InvestigadoresSection = () => {
  return (
    <>
        <ServicesContainer id = 'investigadores'>
        <ServicesH1>Investigadores</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Ing. Ángela Marcela Mejía Fajardo</ServicesH2>
                <ServicesP>Doctora en Ingeniería de la Universidad de los Andes y Doctora en Telemática de la Universidad Politécnica de Cataluña, Barcelona, España.</ServicesP>
            </ServicesCard>
            <ServicesCardy>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Ing. Astrid Rubiano Fonseca</ServicesH2>
                <ServicesP>Doctorada de la Université Paris Ouest Nanterre La Défense Ciencias para la ingenieria Octubrede2013 - Enerode 2017 smart control of soft robotic hand</ServicesP>
            </ServicesCardy>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Ing. Mauricio Plaza Torres</ServicesH2>
                <ServicesP>Doctor del Instituto Superior Politécnico José Antonio Echeverría- doctorado en ciencias tecnicas Enerode 2005- Febrerode 2010 </ServicesP>
            </ServicesCard>
            <ServicesCardy2>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Ing. Leonardo Juan Ramírez López</ServicesH2>
                <ServicesP>Doctor en Ingeniería Biomédica (Universidade de Mogi das Cruzes SP, Brasil)</ServicesP>
            </ServicesCardy2>
        </ServicesWrapper>
    </ServicesContainer>
    <ServicesContainer id = 'jovenesinvestigadores'>
        <ServicesH1>Jovenes Investigadores</ServicesH1>
        <ServicesWrapper2>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Ing. Yuli Paola Cifuentes Sanabria</ServicesH2>
                <ServicesP>Magister de la  UNIVERSITAT POMPEU FABRA Master en emprendimiento e innovación Octubre de 2018</ServicesP>
            </ServicesCard>
            <ServicesCardy>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Ing. Diana Marcela Ruiz Martínez</ServicesH2>
                <ServicesP>Pregrado Universitario de la UNIVERSIDAD MILITAR NUEVA GRANADA Ingeniería en Telecomunicaciones Juniode2011 - Agostode 2016 Diseño de un Sistema en Cloud para Controlar Dispositivos IoT a través de Internet</ServicesP>
            </ServicesCardy>
        </ServicesWrapper2>
    </ServicesContainer>
    <ServicesContainer id = 'asistentes'>
        <ServicesH1>Asistentes Graduados de Investigación</ServicesH1>
        <ServicesWrapper2>
            <ServicesCard>
                <ServicesIcon src={Icon7}/>
                <ServicesH2>Lin. Gabriel Alberto Puerta Aponte</ServicesH2>
                <ServicesP>Doctorado de la UNIVERSIDAD MILITAR NUEVA GRANADA Doctorado en Ciencias Aplicadas Febrero de 2018</ServicesP>
            </ServicesCard>
            <ServicesCardy>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Ing. Fredy David Bernal Castillo</ServicesH2>
                <ServicesP>Doctorado de la UNIVERSIDAD MILITAR NUEVA GRANADA Doctorado en Ciencias Aplicadas Enero de 2018</ServicesP>
            </ServicesCardy>
        </ServicesWrapper2>
    </ServicesContainer>
    </>
  )
}

export default InvestigadoresSection