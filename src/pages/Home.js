import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <Box
      sx={{
        height: '95vh',
        width: '100%',
        backgroundColor: '#2e3440',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: 'solid green',
      }}
    >
      <Typography variant='h5' sx={{ padding: '0px 0 30px 0' }}>
        Greetings
      </Typography>

      <Box
        sx={{
          width: '90vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: '2.5em',
          color: '#88C0D0',
          fontWeight: '600',
          // border: 'solid',
        }}
      >
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('My name is Madan Gurung.')
              .pauseFor(500)
              .deleteAll()
              .typeString(`I'm a Front-End Engineer.`)
              .pauseFor(500)
              .deleteAll()
              .typeString(`I'm a self taught React & Next JS Developer.`)
              .deleteAll()
              .start();
          }}
        />
      </Box>

      <Box
        sx={{
          padding: '50px 0 40px 0',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100px',
          // border: 'solid',
        }}
      >
        <Box>
          <Link href='https://github.com/grngmdn' color='#ECEFF4'>
            <AiFillGithub fontSize='40px' />
          </Link>
        </Box>
        <Box>
          <Link
            href='https://www.linkedin.com/in/madangurung'
            sx={{
              color: '#ECEFF4',
            }}
          >
            <AiFillLinkedin fontSize='43px' />
          </Link>
        </Box>
      </Box>
      <Button
        variant='contained'
        sx={{
          color: '#2e3440',
          backgroundColor: '#88C0D0',
          height: '55px',
          borderRadius: '10px',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#6c99a6' },
        }}
        size='large'
        startIcon={<DownloadIcon />}
      >
        Download Resume
      </Button>
    </Box>
  );
}

export default Home;
