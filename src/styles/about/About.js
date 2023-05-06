import styled from 'styled-components'
import { MainColor, MainTextColor } from '../../variable/Color'

export const AboutSection = styled.section`
    width:100%;
    min-height:100vh;
    padding:4rem 6rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    @media (max-width:992px) {
        padding:4rem 3rem;
        min-height:fit-content;
    }
    @media (max-width:576px) {
        padding:4rem 1.5rem;
    }
`

export const AboutContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`

export const ImageBox = styled.div`
    width:100%;
    display:flex;
    position:relative;
    padding-bottom:1rem;
    :before {
        content: '';
        display:block;
        margin:auto;
        width:100%;
        height:1px;
        background:rgba(200,200,200,0.6);
        position:absolute;
        bottom:0;
        right:0;
        left:0;
    }
    @media (max-width:576px) {
        justify-content:center;
    }
`

export const Image = styled.img`
    width:150px;
    height:200px;
    max-height:200px;
    max-width:150px;
    border-radius:30px;
    border:1px solid ${MainColor};
`


export const Article = styled.article`  
    margin-top:1rem;
    width:100%;
`

export const ArticleTitle = styled.h1`
    font-size:2rem;
    color:${MainColor};
    font-weight:bold;
    span {
        color:${MainTextColor};
    }
`

export const ArticleBody = styled.p`
    font-size:1.5rem;
    line-height:2.3rem;
    margin-top:1rem;
    width:100%;
    color:${MainColor};
    background:${MainTextColor};
    border-radius:10px;
    padding:0.5rem;
    @media (max-width:576px) {
        margin-top:0.5rem;
    }
`