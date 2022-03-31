import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function Contact() {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100vw",
        backgroundColor: "#292E39",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "120px 0 120px 0",
        // border: "solid"
      }}
    >
      <Typography
        variant='h4'
        sx={{fontWeight: "bold"}}
      >
        Get In Touch
      </Typography>
      <Box className='underline-about'></Box>
      <Box
        sx={{
          display: "flex",
          margin: "100px 0 0 0",
          // border: "solid",
          height: "75%"
        }}
      >
        <Box
          sx={{
            width: "40%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "solid",
          }}
        >
          <Box
            sx={{padding: "30px 0 30px 0"}}
          >
            <PhoneIphoneIcon
              fontSize='large'
            /><br /><br />
            <Typography
              variant='p'
              sx={{color: "#88C0D0"}}
            >
              Call Me On
            </Typography><br /><br />
            <Typography>
              07456086580
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "30px 0 30px 0"
            }}
          >
            <EmailIcon
              fontSize='large'
            /><br /><br />
            <Typography
              variant='p'
              sx={{color: "#88C0D0"}}
            >
              Email Me At
            </Typography><br /><br />
            <Typography>
              gurungmadan@hotmail.com
            </Typography>
          </Box>
          <Box
            sx={{padding: "30px 0 30px 0"}}
          >
            <PinDropIcon
                fontSize='large'
              /><br /><br />
            <Typography
              variant='p'
              sx={{color: "#88C0D0"}}
            >
              Find Me At
            </Typography><br /><br />
            <Typography>
              Reading, UK
            </Typography>
          </Box>
        </Box>
        {/* <Box
          sx={{
            // border: "solid",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 2},
              // border: "solid",
              height: "500px"
            }}
            noValidate
            autoComplete="off"
          >
          <TextField 
            label="Name"
            variant='filled'
            sx={{
              width: "40%",
              backgroundColor: '#88c0d0'
            }}
          />
          <TextField 
            label="Email"
            variant='filled'
            sx={{
              width: "50%",
              backgroundColor: '#88c0d0'
            }}
          />
          <TextField 
            label="Subject"
            variant='filled'
            sx={{
              width: "94%",
              backgroundColor: '#88c0d0'
            }}
          />
          <TextField 
            label="Message"
            multiline
            rows={8}
            variant='filled'
            sx={{
              width: "94%",
              backgroundColor: '#88c0d0'
            }}
          />
          <Button
            variant='contained'
            sx={{color: "#2e3440", backgroundColor: "#88C0D0", height: "55px", borderRadius: "10px", fontWeight: "bold", "&:hover": {backgroundColor: "#6c99a6"}}}
            size= "large"
            endIcon={<SendIcon />}
          >Send Message</Button>
        </Box>
        </Box> */}
      </Box>



        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

    </Box>
  )
}

export default Contact