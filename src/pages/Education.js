import { Box, Grid } from '@mui/material'
import React from 'react'

function Education() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign: "center",
              padding: "40px 0 120px 0"
            }}
          >
            <h1>Education</h1>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <h5>2016-2017</h5>
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
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5} >
          <Box
          >
              <h3>CITY UNIVERSITY LONDON</h3>
              <h4>INFORMATION SYSTEM TECHNOLOGY</h4>
              <h5>PG Certificate</h5>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "right"}}
          >
              <h3>UNIVERSITY OF HERTFORDSHIRE</h3>
              <h4>COMPUTER SCIENCE</h4>
              <h5>Bachelors Degree</h5>   
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
              <Box className='line-education'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "left"
            }}
          >
            <h5>2012-2016</h5>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <h5>2011-2012</h5>
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
              <Box className='line-education'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "left"}}
          >
              <h3>READING COLLEGE</h3>
              <h5>Further A Levels</h5>
          </Box>        
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "right"}}
          >
              <h3>HIGHDOWN & SIXTH FORM CENTRE</h3>
              <h5>A Levels</h5> 
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
              <Box className='line-education'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "left"
            }}
          >
            <h5>2012-2016</h5>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: "right"
            }}
          >
            <h5>2006-2008</h5>
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
              <Box className='line-education'></Box>
            </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{textAlign: "left"}}
          >
              <h3>PROSPECT COLLEGE OF TECHNOLOGY</h3>
              <h5>GCSE</h5>
          </Box>        
        </Grid>
      </Grid>
    </Box>
  )
}

export default Education