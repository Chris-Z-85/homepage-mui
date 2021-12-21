import React from "react";
import {
  Container,
  Box,
  FormControl,
  Input,
  InputLabel,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "./Heading";

const Contact = () => {
  return (
    <Container>
      <Heading title="Contact" subtitle="Get in touch" />
      <Typography>
        Got a question or want to work together? Fill in your info in the form
        below and I look forward to hearing from you!
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Name" variant="filled" required />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          required
          type="email"
        />
        <TextField
          id="message"
          label="Message"
          variant="filled"
          multiline
          rows={10}
          required
        />
        <Button variant="contained">Send</Button>
      </Box>
    </Container>
  );
};

export default Contact;
