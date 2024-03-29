import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import {
  AiFillGithub,
  AiFillDatabase,
  AiFillCloud,
  AiOutlineForm,
  AiFillApi,
} from 'react-icons/ai';
import { SiRedux, SiAdobephotoshop } from 'react-icons/si';
import { GiLargePaintBrush, GiTestTubes } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';

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
        width: '100%',
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
          padding: '0 0 40px 0',
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
          maxWidth: '900px',
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <CgWebsite fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Frontend</Typography>
              </Grid>
              <Grid item xs={4}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>HTML</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>CSS</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>SCSS</Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>REACT</Typography>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>CREATE REACT APP</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <GiLargePaintBrush fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Styling</Typography>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>TAILWIND</Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>MUI</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>STYLED COMPONENTS</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <SiRedux fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>State Management</Typography>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>REDUX</Typography>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>REACT QUERY</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <AiFillApi fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>API</Typography>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>AXIOS</Typography>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>REST API</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <AiOutlineForm fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Forms</Typography>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>FORMIK</Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>YUP</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <GiTestTubes fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Testing</Typography>
              </Grid>
              <Grid item xs={8}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>REACT TESTING LIBRARY</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>JEST</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <AiFillDatabase fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Database</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>FIREBASE</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <AiFillGithub fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Version Control</Typography>
              </Grid>
              <Grid item xs={5}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>GIT</Typography>
                </Box>
              </Grid>
              <Grid item xs={7}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>GITHUB</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <SiAdobephotoshop fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Image Editor</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>PHOTOSHOP</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} textAlign='center'>
                <AiFillCloud fontSize={50} />
              </Grid>
              <Grid item xs={12} textAlign='center'>
                <Typography variant='button'>Cloud</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={styling.buttonStyles}>
                  <Typography variant='body2'>DOCKER</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
