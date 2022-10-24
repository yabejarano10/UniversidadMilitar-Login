import styled from 'styled-components';
import bg1 from '../../images/bg1.jpg'
import bg2 from '../../images/bg2.jpg'
import bg3 from '../../images/bg6.png'
import bg from '../../images/bg5.png'


export const ServicesContainer=styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    background-position: center 0;
    background-size: cover;

    @media screen and(max-width: 1800px)
    {
        height: 1500px;
    }

    @media screen and(max-width: 1000px)
    {
        height: 1000px;
    }

    @media screen and(max-width: 768px)
    {
        height: 1500px;
    }

`;

export const ServicesWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 130px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 16px;
    padding: 0 15px;
    

    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 700px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`;

export const ServicesWrapper2 = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 130px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 16px;
    padding: 0 15px;
    

    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 700px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`;

export const ServicesCard =styled.div`
    background: linear-gradient( rgba(40,70,136,0.8), rgba(40,70,136,0.8)), url(${bg1});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 100%;
    max-width: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesCardy =styled.div`
    background: linear-gradient(rgba(255,184,76,0.8),rgba(255,184,76,0.8)), url(${bg2});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 100%;
    max-width: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesCardy2 =styled.div`
    background: linear-gradient(rgba(255,184,76,0.8),rgba(255,184,76,0.8)), url(${bg3});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 100%;
    max-width: 320px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`;


export const ServicesIcon =styled.img`
    height: 200px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 =styled.h1`
    font-size: 2.5rem;
    color:#fff;
    margin-top: 135px;
    margin-bottom: 64px;

    @media screen and(max-width: 480px)
    {
        font-size: 2rem;
    }
`;

export const ServicesH2 =styled.h2`
    color:#fff;
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP=styled.p`
color:#fff;    
font-size: 1reml
    text-align: center;
`