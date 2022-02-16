import React from "react"
import { Container, Grid, Box, Typography, CardMedia, CardContent, CardActions, Card, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import JeopardyGame from "../jeopardy/JeopardyGame"

function Games(){

    const gameList = [
        {
            title: 'Jeopardy',
            img: '#',
            alt: 'Jeopardy',
            description: 'Jeopardy description goes here',
            link: '/jeopardy',
        },
        {
            title: 'Black Jack',
            img: '#',
            alt: 'Black Jack',
            description: 'Black Jack description goes here',
            link: '/blackjack',
        },
        {
            title: 'Memory Test',
            img: '#',
            alt: 'Memory Test',
            description: 'Memory Test description goes here',
            link: '/memory',
        },
        {
            title: 'Hangman',
            img: '#',
            alt: 'Hangman',
            description: 'Hangman description goes here',
            link: '/hangman',
        },

    ]

    return (
        <Container style={{ backgroundColor: 'white', height: '100vh' }}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                    {gameList.map((game) => (
                        <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component='img'
                                        height='140'
                                        image={ game.img }
                                        alt={ game.alt }
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            { game.title }
                                        </Typography>
                                        <Typography variant='body2'>
                                            { game.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant='outlined' size='small'>
                                            <Link to={game.link}>Play</Link>
                                        </Button>
                                    </CardActions>
                        </Card>
                    ))}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


export default Games