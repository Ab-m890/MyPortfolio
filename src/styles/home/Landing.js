import styled from 'styled-components'
import { MainColor, SecondColor, MainTextColor } from '../../variable/Color'

export const LandingSection = styled.section`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(90deg, ${MainColor} 67%, ${SecondColor} 33%);
    background-size:100% 100%;
    :before {
        content:'';
        width:100%;
        height:10px;
        position:absolute;
        top:100%;
        left:0;
        background-size:10px 10px;
        border:none;
        background-image:linear-gradient(135deg, ${SecondColor} 25% , transparent 25%),
                    linear-gradient(225deg, ${SecondColor} 25% , transparent 25%);
        @media (min-width:769px) {
            display:none;
        }
    }
    @media (max-width:768px) {
        background:linear-gradient(180deg ,${MainColor} 50%, ${SecondColor} 50%) no-repeat;
    }
`

export const LandingContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    padding:0 6rem;
    @media (max-width:992px) {
        padding:0 3rem;
    }
    @media (max-width:768px) {
        padding:0 1.5rem;
        height:100%;
    }
`

export const ArticleBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    @media (max-width:768px) {
        width:100%;
        height:50%;
    }
`

export const Article = styled.article`
    dislay:block;
`

export const ArticleTitle = styled.h1`
    font-size:4rem;
    color:${MainTextColor};
    font-weight:bold;
    @media (max-width:768px) {
        font-size:3rem;
    }
    @media (max-width:576px) {
        font-size:2rem;
    }
`

export const ArticleBody = styled.p`
    margin-top:1rem;
    color:white;
    font-size:1rem;
`

export const ImageBox = styled.div`
    width:50%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:768px) {
        width:100%;
        height:50%;
    }
`

export const Image = styled.img`
    border-radius:10px;
    height:40vh;
    width:30vh;
    max-height:100%;
    max-width:100%;
    border:6px solid ${MainTextColor};
    border-right:none;
    border-bottom:none;
`