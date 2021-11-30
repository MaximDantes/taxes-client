import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Container, Link, Toolbar, Typography} from '@mui/material'

const NavBar: React.FC = () => {
    const links = [
        {link: '/payers', title: 'Плательщики'},
        {link: '/kindsOfActivity', title: 'Виды деятельности'},
        {link: '/rates', title: 'Ставки'},
    ]

    return <AppBar position={'static'}>
        <Container maxWidth={'lg'}>
            <Toolbar sx={{gap: '20px'}}>
                {links.map(item => (
                    <NavLink to={item.link} key={item.link}>
                        {item.title}
                    </NavLink>
                ))}
            </Toolbar>
        </Container>
    </AppBar>
}

export default NavBar