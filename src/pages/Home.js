import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#2e3440",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography
        variant='h5'
        sx={{padding: "0px 0 10px 0"}}
      >
        Greetings
      </Typography>
      <Typography
        variant='h3'
        sx={{padding: "10px 0 10px 0"}}
      >
        I am a self taught React Developer
      </Typography>
      <Box
        sx={{padding: "10px 0 50px 0"}}
      >
        hyperlinks 
      </Box>
      <Button
        variant='contained'
      >
        Download Resume
      </Button>
    </Box>
  )
}

export default Home