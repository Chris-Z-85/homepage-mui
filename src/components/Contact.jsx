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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Heading title="Contact" subtitle="Get in touch" />
      <Typography sx={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Got a question or want to work together?
      </Typography>
      <Typography sx={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Fill in your info in the form below and I look forward to hearing from
        you!
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          // width: "50%",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <TextField
            id="name"
            label="Name"
            variant="filled"
            required
            sx={{
              width: "50%",
            }}
          />
          <TextField
            id="email"
            label="Email"
            variant="filled"
            required
            type="email"
            sx={{
              width: "50%",
            }}
          />
        </Box>
        <TextField
          id="message"
          label="Message"
          variant="filled"
          multiline
          rows={6}
          required
        />
        <Button variant="contained">Send</Button>
      </Box>
    </Container>
  );
};

export default Contact;
