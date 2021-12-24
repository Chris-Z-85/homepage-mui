import React from "react";
import { Container, Box, Button, TextField, Typography } from "@mui/material";
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
      <form
        name="contact"
        method="POST"
        action="https://formsubmit.co/chris.z@aol.com"
        class="contact__form"
      >
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
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <input
              type="hidden"
              name="_subject"
              value="New email from Homepage"
            ></input>
            {/* <input
              type="hidden"
              name="_next"
              value="https://chris-z.netlify.app/thankyou.html"
            ></input> */}
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
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Contact;
