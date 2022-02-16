import React from 'react'
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

function NavBar() {
    return(
        <AppBar position='static' style={{ backgroundColor:'gray' }}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                >
                    <HomeIcon style={{ color:'white' }}/>
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    Jays Arcade
                </Typography>  
                <Button color='inherit'>
                    Login
                </Button>  
            </Toolbar>
        </AppBar>
    )
}

export default NavBar