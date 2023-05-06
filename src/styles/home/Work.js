import styled from 'styled-components'
import { MainColor, MainTextColor} from '../../variable/Color'

export const WorkSection = styled.section`
    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:0;
    background-color:${MainColor};
    @media (max-width:992px) {
        min-height:fit-content;
    }
`

export const PageTitle = styled.div`
    width:100px;
    height:100px;
    color:${MainTextColor};
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    background:${MainColor};
    border:3px solid white;
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%,-50%);
`

export const WorkContainer =styled.div`
    display:flex;
    width:100%;
    padding:0 6rem;
    flex-wrap:wrap;
    @media (max-width:992px) {
        padding:6rem 3rem;
    }
    @media (max-width:576px) {
        padding:6rem 1.5rem;
    }
`

export const Article = styled.article`
    width:50%;
    display:block;
    padding:0 10px;
    @media (max-width:768px) {
        width:100%;
        padding:0;
        margin-bottom:${props => props.mb};
    }
`

export const ArticleTitle = styled.h1`
    font-size:3rem;
    font-weight:bold;
    color:${MainTextColor};
    @media (max-width:992px) {
        font-size:2rem;
    }
    @media (max-width:576px) {
        font-size:1.5rem;
    }
`

export const ArticleBody = styled.p`
    fontSize:1rem;
    font-weight:bold;
    color:white;
    margin-top:1rem;
`

export const ArticleLink = styled.p`
    width:300px;
    height:50px;
    padding:10px;
    margin-top:2rem;
    outline:none;
    border:1px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    position:relative;
    transition:ease-in-out 0.2s;
    font-weight:bold;
    cursor:pointer;
    background:${MainColor};
    :hover {
        border-color:${MainTextColor};
        color:${MainTextColor};
        transform:scale(1.1);
    }
    @media (max-width:992px) {
        width:50%;
    }
`