import styled from 'styled-components'
import { MainTextColor, MainColor } from '../../variable/Color'

export const WorkDetailsMainSection = styled.section`
    width:100%;
    min-height:100vh;
    padding:1rem;
    display:flex;
    justify-content:center;
`

export const WorkDetailsContainer = styled.div`
    max-width:768px;
`

export const ImageBox = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0.5rem;
    border-radius:5px;
    background:rgb(245,245,245);
    border:2px solid rgba(100,100,100,0.7);
`

export const Image = styled.img`
    width:100%;
    border-radius:5px;
`

export const TitleBox = styled.div`
    width:100%;
    margin:2rem 0 1rem;
`

export const Title = styled.h1`
    font-size:1.5rem;
    color:${MainColor};
    padding-left:1rem;
    border-left:5px solid ${MainTextColor};
`

export const ButtonLinkBox = styled.div`
    width:100%;
    margin:2rem 0;
`

export const ButtonLink = styled.button`
    width:100%;
    height:50px;
    border:none;
    outline:none;
    transition:ease-in-out 0.3s;
    font-size:1rem;
    font-weight:bold;
    border-radius:50px;
    color:${props => props.color};
    background:${props => props.bgColor};
    
    :hover {
        color:${props => props.bgColor};
        background:${props => props.color};
    }
`

export const ToolsList = styled.ul`
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
`

export const ToolsItem = styled.li`
    color:${MainColor};
    font-size:1rem;
    width:fit-content;
    padding:0.5rem 1rem;
    border-radius:50px;
    background:rgb(230,230,230);
`

export const Description = styled.p`
    font-size:1rem;
    color:${MainColor};
    line-height:2rem;
`