import styled from 'styled-components'
import { MainColor, MainTextColor} from '../../variable/Color'

export const ContactMainSection = styled.section`
    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:0;
    background:rgb(245,245,245)
`

export const ContactContainer =styled.div`
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

export const ContactForm = styled.form`
    width:50%;
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    @media (max-width:768px) {
        width:100%;
    }
`

export const Input = styled.input`
    width:100%;
    height:50px;
    padding-left:0.5rem;
    border-radius:4px;
    border:1px solid ${MainColor};
    outline:none;
`

export const TextArea = styled.textarea`
    width:100%;
    padding:0.5rem 0 0 0.5rem;
    border-radius:4px;
    border:1px solid ${MainColor};
    outline:none;
`

export const ContactMethodContainer = styled.div`
    width:50%;
    padding-left:1rem;
    display:flex;
    flex-direction:column;
    gap:2rem;
    @media (max-width:768px) {
        width:100%;
        margin-top:2rem;
        padding:0;
    }
`

export const MethodBox = styled.a`
    display:flex;
    flex-direction:column;
    width:100%;
    cursor:pointer;
`

export const IconBox = styled.h2`
    display:flex;
    font-size:1.5rem;
    align-items:center;
    color:${MainTextColor};
    gap:0.2rem;
`

export const Text = styled.p`
    font-size:1rem;
    color:${MainColor};
`