import React, { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import Heading from "./Heading";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

const Contact = () => {
  const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string()
      .min(10, "Please enter your message")
      .max(200, "Maximum is 200 characters")
      .required("Required"),
  });

  const [formMsg, setFormMsg] = useState("");

  const handleSubmit = (values) => {
    fetch("https://formsubmit.co/ajax/chris.z@aol.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => setFormMsg(data.message))
      .catch((error) => console.log(error));
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        marginTop: "2rem",
      }}
      id="contact"
    >
      <Heading title="Contact" subtitle="Get in touch" />
      <Typography
        sx={{ fontSize: "1.25rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Got a question or want to work together?
      </Typography>
      <Typography
        sx={{ fontSize: "1.25rem", marginBottom: "2rem", textAlign: "center" }}
      >
        Fill in your info in the form below and I&nbsp;look forward to hearing
        from you!
      </Typography>
      <Typography>{formMsg}</Typography>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleSubmit(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <InputField name="name" label="Name" />
                <InputField name="email" label="Email" />
              </Box>
              <InputField name="message" label="Message" multiline rows="6" />
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Send
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Contact;
