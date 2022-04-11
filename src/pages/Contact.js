import { Box, Typography } from '@mui/material';
import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <Box
      sx={{
        // height: '100vh',
        width: '100vw',
        backgroundColor: '#292E39',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 0 120px 0',
        // border: 'solid',
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
        Get In Touch
      </Typography>
      <Box className='underline-about'></Box>
      <Box
        sx={{
          display: 'flex',
          margin: '100px 0 0 0',
          // border: 'solid',
          height: '600px',
          width: '90%',
          maxWidth: '1200px',
        }}
      >
        <Box
          sx={{
            width: '50%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // border: 'solid',
          }}
        >
          <Box sx={{ padding: '30px 0 30px 0' }}>
            <PhoneIphoneIcon fontSize='large' />
            <br />
            <br />
            <Typography variant='p' sx={{ color: '#88C0D0' }}>
              Call Me On
            </Typography>
            <br />
            <br />
            <Typography>07456086580</Typography>
          </Box>
          <Box
            sx={{
              padding: '30px 0 30px 0',
            }}
          >
            <EmailIcon fontSize='large' />
            <br />
            <br />
            <Typography variant='p' sx={{ color: '#88C0D0' }}>
              Email Me At
            </Typography>
            <br />
            <br />
            <Typography>gurungmadan@hotmail.com</Typography>
          </Box>
          <Box sx={{ padding: '30px 0 30px 0' }}>
            <PinDropIcon fontSize='large' />
            <br />
            <br />
            <Typography variant='p' sx={{ color: '#88C0D0' }}>
              Find Me At
            </Typography>
            <br />
            <br />
            <Typography>Reading, UK</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // border: 'solid',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              '& > :not(style)': { m: 2 },
              // border: 'solid',
              height: 'auto',
              width: '100%',
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
