import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Work() {
  return (
    <Box>
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
            <h5>Aug 2021 — Present</h5>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              // height: "800px"
            }}
          >
            <Box className='circle'></Box>
            <Box className='line'></Box>
          </Box>
        </Grid>
        <Grid item xs={5} >
          <Box
          >
              <h2>Programmer (Database Management System)</h2>
              <h3>EDPS Limited | Outsourced to Hospital Authority</h3>
              <h3>Participate in conducting internal knowledge sharing session.</h3>
              <h3>Initiate and maintain a CMS to manage internal training materials, guidelines and documentations.</h3>
              <h3>Design and develop a database health check system to facilitate SRE.</h3>
              <h3>Support and guide application teams on MySQL deployment and maintenance.</h3>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "right"}}
          >
              <h2>Programmer (Database Management System)</h2>
              <h3>EDPS Limited | Outsourced to Hospital Authority</h3>
              <h3>Participate in conducting internal knowledge sharing session.</h3>   
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                // height: "800px"
              }}
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
            <h5>Jul 2019 — Aug 2021</h5>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <p>Jun 2018 — Aug 2018</p>
          </Box>
        </Grid>
        <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                // height: "800px"
              }}
            >
              <Box className='circle'></Box>
              <Box className='line'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "left"}}
          >
              <h2>Summer Internship (Software Development)</h2>
              <h3>EDPS Limited | Outsourced to Hospital Authority</h3>
              <h3>Participate in conducting internal knowledge sharing session.</h3>   
          </Box>        
        </Grid>
      </Grid>
    </Box>
  )
}

export default Work