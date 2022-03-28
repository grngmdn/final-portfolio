import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaPhotoVideo, FaReact, FaSass } from "react-icons/fa";
import himalayan from "../img/himalayan_thumbnail.jpeg"
import rts from "../img/rts_thumbnail.jpeg"
import tsc from "../img/tsc_thumbnail.jpeg"
import { SiMaterialui } from "react-icons/si";


function Work() {

  const styling = {
    lineSeperator: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
      // border: "solid"
    },
    iconContainer: {
      borderTop: "0.5px solid #9e9e9e",
      borderBottom: "0.5px solid #9e9e9e",
      width: "300px",
      padding: "10px 0 10px 0",
      // border: "solid"
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    iconContainerRight: {
      borderTop: "0.5px solid #9e9e9e",
      borderBottom: "0.5px solid #9e9e9e",
      width: "300px",
      padding: "10px 0 10px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      // border: "solid"
    }
  }

  return (
    <Box
      sx={{
        // border: "solid",
        marginBottom: "50px"
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 0 120px 0"
            }}
          >
            <Typography
              variant='h4'
              sx={{fontWeight: "bold"}}
            >Recent Experiences</Typography>
            <Box className='underline-work'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <Typography
              sx={{color: "#9e9e9e"}}
            >2022</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={styling.lineSeperator}
          >
            <Box className='circle'></Box>
            <Box className='line'></Box>
          </Box>
        </Grid>
        <Grid item xs={5} >
          <Box sx={{width: "90%"}}>
            <div className="card-outer">
              <a href='https://www.newhimalayancottage.com/'>
                <img 
                      src={himalayan}
                      width= "100%"
                />
                <div className="container-inner">
                  <p>newhimalayancottage.com</p> 
                </div>
              </a>
            </div><br />
            <Typography variant='p'>WEB DEVELOPER</Typography>
            <Typography
              variant='body1'
              sx={{
                color: "#88c0d0"
              }}
            >Building a website for a small family owned hotel in Annapurna trekking region of Nepal.
            </Typography><br />
            <Box sx={styling.iconContainer}>
              <Typography
                variant='button'
                className='typo'
              >Technology used
              </Typography><br />
              <Box sx={{display: "flex", gap: "5px"}}>
                  <FaHtml5 size={42}/>
                  <FaCss3 size={42}/>
                  <FaReact size={42}/>
                  <SiMaterialui size={42}/>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end"}}
          >
            <div className="card-outer">
              <a href='http://readingtamusamajuk.com/'>
                <img 
                      src={rts}
                      width= "100%"
                />
                <div className="container-inner">
                  <p>readingtamusamajuk.com</p> 
                </div>
              </a>
            </div><br />
            <Typography variant='p'>WEB DEVELOPER</Typography>
            <Typography
              variant='body1'
              sx={{
                color: "#88c0d0"
              }}
            >Building a website for a non-profit organization. (Local Nepalese community in Reading)
            </Typography><br />
            <Box sx={styling.iconContainerRight}>
              <Typography
                variant='button'
                className='typo'
              >Technology used
              </Typography><br />
              <Box>
                  <FaHtml5 size={42}/>
                  <FaCss3 size={42}/>
                  <FaBootstrap size={42}/>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={styling.lineSeperator}
            >
              <Box className='circle'></Box>
              <Box className='line'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "left"
            }}
          >
            <Typography
              sx={{color: "#9e9e9e"}}
            >2020</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <Typography
              sx={{color: "#9e9e9e"}}
            >2019</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
            <Box
            sx={styling.lineSeperator}
            >
              <Box className='circle'></Box>
              <Box className='line'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{width: "90%"}}>
            <div className="card-outer">
              <a href='http://tscltd.co.uk/'>
                <img 
                      src={tsc}
                      width= "100%"
                />
                <div className="container-inner">
                  <p>tscltd.co.uk</p> 
                </div>
              </a>
            </div><br />
            <Typography variant='p'>WEB DEVELOPER</Typography>
            <Typography
              variant='body1'
              sx={{
                color: "#88c0d0"
              }}
            >Building a website for a security service company.
            </Typography><br />
            <Box sx={styling.iconContainer}>
              <Typography
                variant='button'
                className='typo'
              >Technology used
              </Typography><br />
              <Box>
                  <FaHtml5 size={42}/>
                  <FaCss3 size={42}/>
                  <FaBootstrap size={42}/>
              </Box>
            </Box>
          </Box>      
        </Grid>
      </Grid>
    </Box>
  )
}

export default Work

