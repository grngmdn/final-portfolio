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
      <Box>
        <img src='http://madangurung.com/img/profile.jpg'/>
      </Box>
      <Typography
        variant='h3'
      >
        Hello! I'm Madan Gurung.
      </Typography>
      <Typography
        variant='p'
      >
        Front-End Developer
      </Typography>
      <Typography
        variant='body1'
      >
        Dynamic and motivated System DBA and Front-End Developer with vast IT experience. Skilled in maintaining databases, front-end development, analytical thinking, and creative problem-solving. Adaptable and transformational team player with an ability to work independently and a willingness to go the extra mile.
      </Typography>
      <Typography
        variant='p'
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
                padding: "10px"
              }}
            >
              HTML
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              CSS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              SASS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              REACT
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              CREATE REACT APP
            </Box>
          </Box>


          <Box
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              TAILWIND CSS
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              MATERIAL UI
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              GIT
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              GITHUB
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
                padding: "10px"
              }}
            >
              PHOTOSHOP
            </Box>
            <Box
              sx={{
                border: "solid 1px",
                borderRadius: "10px",
                padding: "10px"
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