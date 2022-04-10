import { TextField } from '@mui/material';
import React from 'react';
import { useField } from 'formik';

function TextfieldWrapper({ name, ...otherProps }) {
  const [field, mata] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }

  return <TextField {...configTextField} />;
}

export default TextfieldWrapper;
