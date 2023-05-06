import styled from 'styled-components'

import { MainColor , MainTextColor} from '../../variable/Color'

export const MoreSection = styled.section`
    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:992px) {
        min-height:fit-content;
    }
`

export const MoreContainer = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    padding:0 6rem;
    @media (max-width:992px) {
        padding:6rem 3rem;
    }
    @media (max-width:576px) {
        padding:6rem 1.5rem;
    }
`

export const Article = styled.article`
    width:50%;
    margin-bottom:2rem;
    @media (max-width:992px) {
        width:100%;
    }
`

export const ArticleTitle = styled.h1`
    font-size:4rem;
    color:${MainTextColor};
    font-weight:bold;
    @media (max-width:992px) {
        font-size:3rem;
    }
    @media (max-width:576px) {
        font-size:2rem;
    }
`

export const ArticleBody = styled.p`
    color:white;
    font-size:1rem;
    line-height:1.5rem;
    margin-top:1rem;
    width:100%;
    font-weight:bold;
    color:${MainColor};
    @media (max-width:576px) {
        margin-top:0.5rem;
    }
`

export const Shape = styled.div`
    width:50%;
    padding:0 8rem;
    @media (max-width:992px) {
        display:none;
    }
`