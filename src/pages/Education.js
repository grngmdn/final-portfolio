import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Education() {
  const styling = {
    lineSeperator: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      // border: "solid"
    },
  };

  return (
    <Box
      sx={{
        // border: 'solid',
        // marginBottom: '50px',
        paddingBottom: '150px',
      }}
    >
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Box
            sx={{
              padding: '40px 0 120px 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // border: 'solid',
            }}
          >
            {/* Heading  */}
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              Education
            </Typography>
            <Box className='underline-education'></Box>
          </Box>
        </Grid>
        {/* Education - 1  */}
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Typography sx={{ color: '#9e9e9e' }}>2017-2018</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={styling.lineSeperator}>
            <Box className='circle'></Box>
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Typography variant='h6'>INFORMATION SYSTEM TECHNOLOGY</Typography>
            <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
              CITY UNIVERSITY LONDON
            </Typography>
            <Typography variant='body1'>Post Graduate Certificate</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* Education - 2  */}
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant='h6'>COMPUTER SCIENCE</Typography>
            <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
              UNIVERSITY OF HERTFORDSHIRE
            </Typography>
            <Typography variant='body1'>Bachelors Degree</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={styling.lineSeperator}>
            <Box className='circle'></Box>
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: 'left',
            }}
          >
            <Typography sx={{ color: '#9e9e9e' }}>2012-2016</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* Education - 3  */}
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Typography sx={{ color: '#9e9e9e' }}>2011-2012</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={styling.lineSeperator}>
            <Box className='circle'></Box>
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
              READING COLLEGE
            </Typography>
            <Typography variant='body1'>Further A Levels</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* Education - 4  */}
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
              HIGHDOWN & SIXTH FORM CENTRE
            </Typography>
            <Typography variant='body1'>A Levels</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={styling.lineSeperator}>
            <Box className='circle'></Box>
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{
              textAlign: 'left',
            }}
          >
            <Typography sx={{ color: '#9e9e9e' }}>2012-2016</Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          {/* Education - 5  */}
          <Box
            sx={{
              textAlign: 'right',
            }}
          >
            <Typography sx={{ color: '#9e9e9e' }}>2006-2008</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={styling.lineSeperator}>
            <Box className='circle'></Box>
            <Box className='line-education'></Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
              PROSPECT COLLEGE OF TECHNOLOGY
            </Typography>
            <Typography variant='body1'>GCSE</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
