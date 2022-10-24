import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import {Button} from '../ButtonElement';
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover =() =>
    {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>La ingenería al servicio de la salud.</HeroH1>
                <HeroP>
                    El grupo TIGUM de la Universidad Militar Nueva Granada, 
                    es un equipo de trabajo conformado por docentes y estudiantes investigadores, 
                    que encaminan sus esfuerzos en la investigación y desarrollo de redes y medios de comunicación de señales biológicas a distancia, 
                    con el fin de participar en el aumento gradual de la calidad de vida de los colombianos.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = "about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Mas info {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>


        </HeroContainer>
    )
}

export default HeroSection