import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const InputField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const errorText = meta.error && meta.touched ? meta.error : "";

  const configTextfield = {
    ...field,
    ...otherProps,
    error: !!errorText,
    helperText: errorText,
    fullWidth: true,
    variant: "filled",
  };

  return <TextField {...configTextfield} />;
};

export default InputField;
