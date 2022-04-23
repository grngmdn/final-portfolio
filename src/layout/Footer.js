import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <Box
      sx={{
        height: '5vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        // border: 'solid',
        padding: '20px 0',
      }}
    >
      <Typography variant='overline' sx={{ color: '#9e9e9e' }}>
        Copyright © 2022 Madan Gurung
      </Typography>
      <Box
        sx={{
          // border: "solid",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90px',
        }}
      >
        <Link href='https://github.com/grngmdn' color='#ECEFF4'>
          <AiFillGithub fontSize='27px' />
        </Link>
        <Link
          href='https://www.linkedin.com/in/madangurung'
          sx={{
            color: '#ECEFF4',
          }}
        >
          <AiFillLinkedin fontSize='30px' />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
