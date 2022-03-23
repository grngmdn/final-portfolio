import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Box
      sx={{
        height: "75vh",
        width: "100vw",
        backgroundColor: "#292E39",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 0 120px 0"
      }}
    >
      <Typography
        variant='h4'
        sx={{fontWeight: "bold"}}
      >
        Get In Touch
      </Typography>
      <Box className='underline-about'></Box>
      <Box
        sx={{
          display: "flex",
          margin: "100px 0 0 0"
        }}
      >
        <Box
          sx={{
            width: "25%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box>
            <Typography>
              Call Me On
            </Typography>
            <Typography>
              07456086580
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "30px 0 30px 0"
            }}
          >
            <Typography>
              Email Me At
            </Typography>
            <Typography>
              gurungmadan@hotmail.com
            </Typography>
          </Box>
          <Box>
            <Typography>
              Find Me At
            </Typography>
            <Typography>
              Reading, UK
            </Typography>
          </Box>
        </Box>
        <Box>
          <form>
          <TextField 
            label="Name"
            sx={{
              width: "50%",
              // margin: "20px"
            }}
          />
          <TextField 
            label="Email"
            sx={{
              width: "50%"
            }}
          />
          <TextField 
            label="Subject"
            fullWidth
          />
          <TextField 
            label="Message"
            fullWidth
            multiline
            maxRows={4}
          />
          <Button
            variant='contained'
            sx={{color: "#2e3440", backgroundColor: "#88C0D0", height: "55px", borderRadius: "10px", fontWeight: "bold", "&:hover": {backgroundColor: "#6c99a6"}}}
            size= "large"
          >Send Message</Button>
        </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact