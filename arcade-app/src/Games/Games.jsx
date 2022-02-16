import React from "react"
import { Container, Grid, Box, Typography, CardMedia, CardContent, CardActions, Card, Button } from '@mui/material'

function Games(){
  return (
    <Container style={{ backgroundColor: 'white', height: '100vh' }}>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component='img'
                            height='140'
                            image='#'
                            alt='Jeopardy'
                        />
                        <CardContent>    
                            <Typography gutterBottom variant='h5' component='div'>
                                Jeopardy
                            </Typography>
                            <Typography variant='body2'>
                                Jeopardy Description goes here
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Play</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component='img'
                            height='140'
                            image='#'
                            alt='Black Jack'
                        />
                        <CardContent>    
                            <Typography gutterBottom variant='h5' component='div'>
                                Black Jack
                            </Typography>
                            <Typography variant='body2'>
                                Black Jack Description goes here
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Play</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component='img'
                            height='140'
                            image='#'
                            alt='Memory'
                        />
                        <CardContent>    
                            <Typography gutterBottom variant='h5' component='div'>
                                Memory Test
                            </Typography>
                            <Typography variant='body2'>
                                Memory description goes here
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Play</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component='img'
                            height='140'
                            image='#'
                            alt='Snake'
                        />
                        <CardContent>    
                            <Typography gutterBottom variant='h5' component='div'>
                                Snake
                            </Typography>
                            <Typography variant='body2'>
                                Snake Description goes here
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Play</Button>
                        </CardActions>
                    </Card>
                </Grid> 
            </Grid>
        </Box>
    </Container>
  )
}


export default Games