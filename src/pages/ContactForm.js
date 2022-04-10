import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const validationSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  subject: Yup.string().required('This field is required'),
  message: Yup.string().required('This field is required'),
});

function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='contact-form'>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Field
                required
                type='text'
                label='Name'
                name='name'
                fullWidth
                as={TextField}
                variant='filled'
                sx={{
                  backgroundColor: '#88c0d0',
                }}
                error={
                  Boolean(errors.name) && touched.name ? (
                    <ErrorMessage name='name' />
                  ) : null
                }
                helperText={
                  errors.name && touched.name ? (
                    <ErrorMessage name='name' />
                  ) : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                type='email'
                label='Email Address'
                name='email'
                fullWidth
                as={TextField}
                variant='filled'
                sx={{
                  backgroundColor: '#88c0d0',
                }}
                error={
                  Boolean(errors.email) && touched.email ? (
                    <ErrorMessage name='email' />
                  ) : null
                }
                helperText={
                  errors.email && touched.email ? (
                    <ErrorMessage name='email' />
                  ) : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                type='text'
                name='subject'
                as={TextField}
                variant='filled'
                fullWidth
                label='Subject'
                sx={{
                  backgroundColor: '#88c0d0',
                }}
                error={
                  Boolean(errors.subject) && touched.subject ? (
                    <ErrorMessage name='subject' />
                  ) : null
                }
                helperText={
                  errors.email && touched.email ? (
                    <ErrorMessage name='subject' />
                  ) : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                required
                type='text'
                name='message'
                variant='filled'
                label='Message'
                as={TextField}
                fullWidth
                multiline
                rows={8}
                sx={{
                  backgroundColor: '#88c0d0',
                }}
                error={
                  Boolean(errors.message) && touched.message ? (
                    <ErrorMessage name='message' />
                  ) : null
                }
                helperText={
                  errors.message && touched.message ? (
                    <ErrorMessage name='message' />
                  ) : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
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
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
