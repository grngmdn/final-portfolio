import { Box, Typography } from '@mui/material';
import React from 'react';

function About() {
  const styling = {
    buttonStyles: {
      border: 'solid 1px',
      borderRadius: '10px',
      padding: '10px',
      marginRight: '5px',
      borderColor: '#88C0D0',
    },
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#292E39',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: "50px 0 50px 0",
        // border: "solid"
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Box className='underline-about'></Box>
      <Box className='display-photo'></Box>
      <Typography variant='h3' className='name-cover'>
        Hello! <span style={{ color: '#88C0D0' }}>I'm Madan Gurung.</span>
      </Typography>
      <Typography
        variant='p'
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
          maxWidth: '900px',
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
          // border: "solid 1px",
          height: 'auto',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            padding: '10px',
          }}
        >
          <Box sx={styling.buttonStyles}>HTML</Box>
          <Box sx={styling.buttonStyles}>CSS</Box>
          <Box sx={styling.buttonStyles}>SCSS</Box>
          <Box sx={styling.buttonStyles}>REACT</Box>
          <Box sx={styling.buttonStyles}>CREATE REACT APP</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '10px',
          }}
        >
          <Box sx={styling.buttonStyles}>TAILWIND CSS</Box>
          <Box sx={styling.buttonStyles}>MATERIAL UI</Box>
          <Box sx={styling.buttonStyles}>PHOTOSHOP</Box>
          <Box sx={styling.buttonStyles}>FIGMA</Box>
          <Box sx={styling.buttonStyles}>GIT</Box>
          <Box sx={styling.buttonStyles}>GITHUB</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '10px',
            marginRight: '5px',
            borderColor: '#88C0D0',
          }}
        >
          <Box sx={styling.buttonStyles}>NETLIFY</Box>
          <Box sx={styling.buttonStyles}>AXIOS</Box>
          <Box sx={styling.buttonStyles}>REST API</Box>
          <Box sx={styling.buttonStyles}>REDUX</Box>
          <Box sx={styling.buttonStyles}>REACT QUERY</Box>
          <Box sx={styling.buttonStyles}>FORMIK</Box>
          <Box sx={styling.buttonStyles}>JEST</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
