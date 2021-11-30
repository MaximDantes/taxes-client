import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Toolbar, Typography} from '@mui/material'

const NavBar: React.FC = () => {
    const links = [
        {link: '/payers', title: 'Плательщики'},
        {link: '/kindsOfActivity', title: 'Виды деятельности'},
        {link: '/rates', title: 'Ставки'},
    ]

    return <AppBar position={'static'}>
        <Toolbar>
            {links.map(item => (
                <Typography variant={'h6'} key={item.link}>
                    <NavLink to={item.link}>
                        {item.title}
                    </NavLink>
                </Typography>
            ))}
        </Toolbar>
    </AppBar>
}

export default NavBar