import styled from 'styled-components'
import { MainTextColor, MainColor } from '../../variable/Color'

export const WorkMainSection = styled.section`
    width:100%;
    min-height:100vh;
    padding: 2rem 0;
`

export const PageTitleContainer = styled.div`
    text-align:center;
    width:100%;
`

export const PageTitle = styled.p`
    font-size:3rem;
    color:${MainTextColor};
    @media (max-width:576px) {
        font-size:2rem;
    }
`

export const CardsContainer = styled.div`
    width:100%;
    margin-top:2rem;
    display:grid;
    gap:1rem;
    padding:0 6rem;
    grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
    @media (max-width:992px) {
        padding:0 1rem;
    } 
    @media (max-width:768px) {
        grid-template-columns:minmax(0,1fr) minmax(0,1fr);
    } 
    @media (max-width:576px) {
        grid-template-columns:minmax(0,1fr);
    } 
`

export const CardItem = styled.div`
    position:relative;
    height:200px;
    border-radius:5px;
    overflow:hidden;
    box-shadow:0 0 1px 0.5px rgba(120,120,120,0.3);
    :hover div img {
        scale:1.05;
    }
`

export const CardImageBox = styled.div`
    width:100%;
    height:160px;
    padding:0.5rem;
    border-radius:5px;
    background:rgb(245,245,245);
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
`

export const CardImage = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius:5px;
    transition:ease-in-out 0.5s;
`

export const CardTitle = styled.p`
    width:100%;
    height:40px;
    padding:0.5rem;
    font-size:1rem;
    display:flex;
    align-items:center;
    overflow:hidden;
    overflow-wrap:break-word;
    text-overflow:ellipsis;
    white-space:nowrap;
    color:${MainColor};
`