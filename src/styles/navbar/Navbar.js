import styled from 'styled-components'
import { MainTextColor, MainColor } from '../../variable/Color'

export const Nav = styled.nav`
        width:100%;
        height:70px;
        padding:20px;
        z-index:1;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        background:${MainColor};
        @media (max-width:576px) {
            position:${props => props.position};
            left:0;
            top:0;
        }
    `
export const NavLogo = styled.div`
        display:block;
        cursor:pointer;
        z-index:999;
    `
export const Logo = styled.div`
        color:${MainTextColor};
        font-weight:bold;
        font-size:1.5rem;
        transition:ease-in-out 0.3s;
        display:flex;
        @media (max-width:576px) {
            font-size:1rem;
        }
    `

export const NavLinksContainer = styled.div`
    width: calc(33% - 20px);
    position:absolute;
    z-index:2;
    top:10px;
    right:10px;
    background-color:white;
    @media (max-width:768px) {
        width:50%;
    }
    @media(max-width:576px)  {      
        height:100vh;
        width:100vw;
        display:flex;
        z-index:2;
        justify-content:center;
        align-items:center;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-color:${MainColor};
    }
`

export const NavLinks = styled.ul`
        display:flex;
        flex-direction:column;
        padding:20px;
        gap:20px;
        list-style:none;
        @media(max-width:576px) {
            gap:50px;
        }
    `
export const NavLink = styled.li`
        font-size:1.2rem;
        color:${MainColor};
        transition:ease-in-out 0.3s;
        cursor:pointer;
        :hover{
            transform:scale(1.05);
        }
        @media(max-width:576px) {
            color:${MainTextColor};
            font-size:2.5rem;
            text-align:center;
        }

    `

export const MenuIc = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    color:${MainTextColor};
`