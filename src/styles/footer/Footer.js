import styled from 'styled-components'
import { MainColor } from '../../variable/Color'

export const FooterContainer = styled.footer`
    height:70px;
    width:100%;
    background:${MainColor};
    display:flex;
    align-items:center;
    justify-content:center;
`


export const FooterText = styled.p`
    font-size:1rem;
    color:white;
`