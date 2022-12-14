import styled from 'styled-components'
import bg from '../../images/bg5.png';
import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/bg6.png';
import bg3 from '../../images/bg7.jpg';

export const InfoContainer =styled.div`
    background-color: #182b57;
    /* background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')}; */
    background-image: url(${bg}); 
    background-position: center;
    background-size: cover;
    @media screen and(max-width:768px)
    {
        padding: 100px 0;
    }

`;

export const InfoContainery =styled.div`
    color: #fff;
    /* background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')}; */
    background: linear-gradient(rgba(255,184,76,0.8),rgba(255,184,76,0.8)), url(${bg2});
    background-position: center;
    background-size: cover;
    @media screen and(max-width:768px)
    {
        padding: 100px 0;
    }

`;

export const InfoWrapper=styled.div`

    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding: 5em 6em;
    justify-content: center;

`;

export const InfoRow=styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px)
    {
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;

export const TextWrapper =styled.div`
    margin:0;
    padding-top: 0;
    padding-bottom: 60px;

`;

export const TopLine = styled.div`
 
 color: ${({ lightBg }) => (lightBg ? '#274382' : '#d3963a')};
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-top: 1em;
`;

export const Heading = styled.h1`
    margin-top: 0;
    font-size: 2em;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }

`;


export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 0;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' :'#fff')};
`;


export const BtnWrap= styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 100%;
    height: 100%;
`;

export const Img = styled.img`
    width:45em;
    max-width: 100%;
    max-height: 100%;
    height: 32em;
    margin: 10em 0 10px 2em;
    padding-right: 0;
`;