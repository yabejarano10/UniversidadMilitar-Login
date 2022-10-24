import styled from 'styled-components';

import {Link} from 'react-router-dom';
import img from '../../images/ftbg.jpg'




export const FooterContainer=styled.footer`
    background-image: linear-gradient(to bottom,rgb(0,16,53,0.8),rgb(211,150,58,0.8)),url(${img});
    background-position: center center;
    background-size: cover;
    border-top: 5px solid #ed6b00;

/*     padding-top: 30px;
    padding-bottom: 30px;
 */
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto; 
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and( max-width: 820px)
    {
        padding-top:32px;
    }
`;

export const FooterLinksWrapper =styled.div`
    display:flex;
    flex-wrap: wrap;
    @media screen and(max-width: 820px)
    {
        flex-direction: column;
    }
`;

export const FooterLinkItems =styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 360px;
    box-sizing: border-box;
    color: #fff;


    @media screen and(max-width: 420px)
    {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;


export const FooterLinkTitle =styled.h1`
    font-size: 14px;
    margin-bottom: 16px;

`;

export const FooterLink =styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover
    {
        color: #01bf71;
        transition: 0.3s ease-out
    }
`;

export const FooterSubtitle = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #fff;

    
`;


export const SocialMedia =styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and(max-width: 820px)
    {
        flex-direction: column;
    }
`;

export const SocialLogo =styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
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

export const BtnWrap= styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 120px;
    height: 100%;
`;
export const ImgWrap2 = styled.div`
    max-width: 350px;
    height: 100%;
`;

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;