import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { education } from '../layout/EducationData';

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
        paddingBottom: '150px',
      }}
    >
      <Box>
        {/* Heading  */}
        <Box
          sx={{
            // border: 'solid',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 0',
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            Education
          </Typography>
          <Box className='underline-education'></Box>
        </Box>

        {education.map((education, index) => {
          return (
            <Grid key={index} container spacing={0.5}>
              <Grid item xs={12} md={5}>
                <Box className='work-text-align'>
                  <Typography sx={{ color: '#9e9e9e' }}>
                    {education.date}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box sx={styling.lineSeperator}>
                  <Box className='circle'></Box>
                  <Box className='line-education'></Box>
                </Box>
              </Grid>
              <Grid item xs={10} md={5}>
                <Box>
                  <Typography variant='h6'>{education.course}</Typography>
                  <Typography variant='subtitle1' sx={{ color: '#88C0D0' }}>
                    {education.uni}
                  </Typography>
                  <Typography variant='body1'>
                    {education.certificate}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
}

export default Education;
