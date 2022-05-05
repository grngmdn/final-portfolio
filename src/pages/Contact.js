import { Box, Grid, Typography } from '@mui/material';
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
        width: '100%',
        backgroundColor: '#292E39',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 0 120px 0',
        // border: 'solid',
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
        Get In Touch
      </Typography>
      <Box className='underline-about'></Box>
      <Box className='contact-container'>
        <Box className='contact-container-info'>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={12}>
              <Box>
                <PhoneIphoneIcon fontSize='large' />
                <br />
                <br />
                <Typography variant='button' sx={{ color: '#88C0D0' }}>
                  Call Me On
                </Typography>
                <br />
                <Typography variant='body1'>07456086580</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={12}>
              <Box>
                <EmailIcon fontSize='large' />
                <br />
                <br />
                <Typography variant='button' sx={{ color: '#88C0D0' }}>
                  Email Me At
                </Typography>
                <br />
                <Typography noWrap variant='body1'>
                  gurungmadan@hotmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={12}>
              <Box>
                <PinDropIcon fontSize='large' />
                <br />
                <br />
                <Typography variant='button' sx={{ color: '#88C0D0' }}>
                  Find Me At
                </Typography>
                <br />
                <Typography variant='body1'>Reading, UK</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className='contact-container-post'>
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
