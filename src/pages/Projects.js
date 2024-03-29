import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProjectsSmall from './ProjectsSmall';
import ProjectsLarge from './ProjectsLarge';

function Projects() {
  const [project, setProject] = useState(0);

  const styling = {
    buttonStyles: {
      color: '#2e3440',
      backgroundColor: '#88C0D0',
      height: '55px',
      borderRadius: '10px',
      fontWeight: 'bold',
      '&:hover': { backgroundColor: '#6c99a6' },
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#292E39',
        padding: '50px 0 100px 0',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: "center",
        alignItems: 'center',
        // border: 'solid',
      }}
    >
      {/* Heading  */}
      <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
        Personal Projects
      </Typography>
      <Box className='underline-projects'></Box>
      <Box
        sx={{
          padding: '40px 0 20px 0',
          display: 'flex',
          // border: 'solid',
          width: '35%',
          justifyContent: 'space-evenly',
          minWidth: '350px',
          maxWidth: '400px',
        }}
      >
        <Button
          sx={styling.buttonStyles}
          size='large'
          onClick={() => {
            setProject(0);
          }}
          // variant= "contained"
        >
          small projects
        </Button>
        <Button
          sx={styling.buttonStyles}
          size='large'
          onClick={() => {
            setProject(1);
          }}
          // variant= "outlined"
        >
          large projects
        </Button>
      </Box>

      <Box sx={{ width: '90%', maxWidth: '1400px' }}>
        {project === 0 ? <ProjectsSmall /> : <ProjectsLarge />}
      </Box>
    </Box>
  );
}

export default Projects;
