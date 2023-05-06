import React, { useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'

//framer motion
import { motion } from 'framer-motion'
import { Logo, Nav, NavLink, NavLinks, NavLogo, MenuIc, NavLinksContainer } from '../../styles/navbar/Navbar'

//mui
//mui
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const navigate = useNavigate()

    const name = `Aboudi`

    const Links = ['Home', 'About Me', 'Works', 'Skills']

    const routes = ['/', '/about', '/works', '#skills']

    return (
        <Nav position={openMenu ? 'fixed' : 'relative'}>
            <NavLogo>
                <Logo>
                    {
                        name.split('').map((char, i) => {
                            return (
                                <motion.h1
                                    style={{
                                        width: 'fit-content'
                                    }}
                                    initial={{ opacity: 0, y: i % 2 == 0 ? i * 50 : -1 * i * 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 * i }}
                                    key={i}
                                >
                                    {char}
                                </motion.h1>
                            )
                        })
                    }
                </Logo>
            </NavLogo>

            {
                openMenu &&
                <NavLinksContainer>
                    <NavLinks>
                        {
                            Links.map((link, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <NavLink
                                        onClick={() => {
                                            setOpenMenu(false)
                                        }}
                                    >
                                        <Link to={routes[i]} style={{ color: 'inherit' }}>{link}</Link>
                                    </NavLink>
                                </motion.div>
                            ))
                        }
                        <motion.di
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: Links.length * 0.1 }}
                        >
                            <NavLink
                                onClick={() => {
                                    setOpenMenu(false)
                                }}
                            >
                                <a href="#contact" style={{ color: 'inherit' }}>Contact Me</a>
                            </NavLink>
                        </motion.di>
                    </NavLinks>
                </NavLinksContainer>
            }

            <MenuIc onClick={() => setOpenMenu(old => !old)}>
                <MenuIcon style={{
                    fontSize: '30px',
                    color: 'inherit',
                    zIndex: 999,
                    transitionDelay: 0.3,
                    transition: 0.3
                }}

                />
            </MenuIc>
        </Nav>
    )
}

export default Navbar