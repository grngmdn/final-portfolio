import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#292E39",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        // padding: "50px 0 50px 0",
        // border: "solid"
      }}
    >
      <Typography
        variant='h4'
        sx={{fontWeight: "bold"}}
      >
        About Me
      </Typography>
      <Box className='underline-about'></Box>
      <Box
        className='display-photo'
      >
      </Box>
      <Typography
        variant='h3'
        className='name-cover'
      >
        Hello! <span style={{color: "#88C0D0"}}>I'm Madan Gurung.</span>
      </Typography>
      <Typography
        variant='p'
        sx={{
          padding: "20px 0 20px 0",
        }}
      >
        Front-End Developer
      </Typography>
      <Typography
        variant='body1'
        sx={{
          padding: "0 0 50px 0",
          textAlign: "center",
          maxWidth: "900px"
        }}
      >
        Dynamic and motivated System DBA and Front-End Developer with vast IT experience. Skilled in maintaining databases, front-end development, analytical thinking, and creative problem-solving. Adaptable and transformational team player with an ability to work independently and a willingness to go the extra mile.
      </Typography>
      <Typography
        variant='h6'
        sx={{
          padding: "0 0 20px 0",
          color: "#88C0D0"
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          // border: "solid 1px",
          height: "auto",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
          <Box
            sx={{
              display: "flex",
              padding: "10px"
            }}
          >
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              HTML
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              CSS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              SASS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              REACT
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                borderColor: "#88C0D0"
              }}
            >
              CREATE REACT APP
            </Box>
          </Box>


          <Box
            sx={{
              display: "flex",
              padding: "10px"
            }}
          >
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              TAILWIND CSS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              MATERIAL UI
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              GIT
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                borderColor: "#88C0D0"
              }}
            >
              GITHUB
            </Box>
          </Box>



          <Box
            sx={{
              display: "flex",
              padding: "10px",
              marginRight: "5px",
              borderColor: "#88C0D0"
            }}
          >
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "5px",
                borderColor: "#88C0D0"
              }}
            >
              PHOTOSHOP
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px",
                borderColor: "#88C0D0"
              }}
            >
              NETLIFY
            </Box>
          </Box>

        
      </Box>      
    </Box>
  )
}

export default About