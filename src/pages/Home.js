import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { GitHub, LinkedIn } from '@mui/icons-material';

function Home() {
  return (
    <Box
      sx={{
        height: "95vh",
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
        sx={{padding: "10px 0 0px 0", fontWeight: "bold"}}
      >
        I am a self taught React Developer
      </Typography>
      <Box
        sx={{padding: "40px 0 40px 0", display: "flex", justifyContent: "space-between", width: "100px"}}
      >
        <Box
            sx={{
              "&:hover": {backgroundColor: "#88C0D0", borderRadius: "50px"},
            }}
        >
          <Link
            href='#'
            color= "#ECEFF4"
          >
            <GitHub fontSize='large'/>
          </Link>
        </Box>
        <Box
            sx={{
              "&:hover": {backgroundColor: "#88C0D0", borderRadius: "50px"},
            }}
        >
          <Link
            href='#'
            sx={{
              color: "#ECEFF4"
            }}
          >
            <LinkedIn fontSize='large'/>
          </Link>
        </Box>
      </Box>
      <Button
        variant='contained'
        sx={{color: "#2e3440", backgroundColor: "#88C0D0", height: "55px", borderRadius: "10px", fontWeight: "bold", "&:hover": {backgroundColor: "#6c99a6"}}}
        size= "large"
        startIcon={<DownloadIcon />}
      >
        Download Resume
      </Button>
    </Box>
  )
}

export default Home 