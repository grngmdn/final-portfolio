import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function About() {
  const styling = {
    buttonStyles: {
      border: 'solid 1px',
      borderRadius: '10px',
      padding: '10px',
      marginRight: '5px',
      borderColor: '#88C0D0',
      textAlign: 'center',
    },
  };

  return (
    <Box
      sx={{
        width: '100vw',
        backgroundColor: '#292E39',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0 150px 0',
        // border: 'solid',
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Box className='underline-about'></Box>
      <Box className='display-photo'></Box>
      <Typography variant='h4' textAlign='center' sx={{ maxWidth: '80%' }}>
        Hello! <span style={{ color: '#88C0D0' }}>I'm Madan Gurung.</span>
      </Typography>
      <Typography
        variant='button'
        sx={{
          padding: '20px 0 20px 0',
        }}
      >
        Front-End Developer
      </Typography>
      <Typography
        variant='body1'
        sx={{
          padding: '0 0 50px 0',
          textAlign: 'center',
          maxWidth: '80%',
        }}
      >
        Computer Science graduate with passion to begin pursuing a lifelong
        career within the Information System Technology sector. Seeking to
        progress through to achieve goal of attaining a role as a Front-End web
        developer. Work well in a team without supervision and excel within
        fast-paced and challenging working environments.
      </Typography>
      <Typography
        variant='h6'
        sx={{
          padding: '0 0 20px 0',
          color: '#88C0D0',
        }}
      >
        Skills
      </Typography>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px',
        }}
      >
        <Grid container spacing={0.8}>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>HTML</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>CSS</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>SCSS</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>REACT</Box>
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Box wrap sx={styling.buttonStyles}>
              CREATE REACT APP
            </Box>
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Box sx={styling.buttonStyles}>TAILWIND CSS</Box>
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Box sx={styling.buttonStyles}>MATERIAL UI</Box>
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Box sx={styling.buttonStyles}>STYLED COMPONENTS</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>PHOTOSHOP</Box>
          </Grid>
          <Grid item xs={2}>
            {' '}
            <Box sx={styling.buttonStyles}>GIT</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>GITHUB</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>NETLIFY</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>AXIOS</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>REST API</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>REDUX</Box>
          </Grid>
          <Grid item xs={5}>
            {' '}
            <Box sx={styling.buttonStyles}>REACT QUERY</Box>
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Box sx={styling.buttonStyles}>FORMIK</Box>
          </Grid>
          <Grid item xs={3}>
            {' '}
            <Box sx={styling.buttonStyles}>JEST</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
