import styled from 'styled-components';
import bg from '../../images/bg7.jpg'


export const ServicesContainer=styled.div`
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient( rgba(40,70,136,0.8), rgba(40,70,136,0.8)), url(${bg});
    background-position: center;
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

    @media screen and (max-width: 480px)
    {
        height: 2000px
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 16px;
    padding: 0 15px;
    margin-bottom: 25px;
    

    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;

    }
`;

export const ServicesCard =styled.div`
    background: linear-gradient(rgba(255,184,76,0.8),rgba(255,184,76,0.8));
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 95%;
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
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 =styled.h1`
    font-size: 2.5rem;
    color:#fff;
    margin-bottom: 64px;
    margin-top: 35px;

    @media screen and(max-width: 480px)
    {
        font-size: 2rem;
    }
`;

export const ServicesH2 =styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP=styled.p`
    font-size: 1reml
    text-align: center;
`