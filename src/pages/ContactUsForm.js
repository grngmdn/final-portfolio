import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import TextField from '../component';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('*This field is required'),
  email: Yup.string()
    .email('*Invalid email format')
    .required('*This field is required'),
  subject: Yup.string().required('*This field is required'),
  message: Yup.string().required('*This field is required'),
});

function ContactUsForm() {
  return (
    <div>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField name='name' label='Full Name' />
            </Grid>
            <Grid item xs={6}>
              <TextField name='email' label='Email' />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactUsForm;
