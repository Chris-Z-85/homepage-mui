import React from "react";
import { Container, Stack, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <Stack spacing={2} direction="row">
        <IconButton color="primary" href="mailto:chris.z@aol.com">
          <EmailIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="https://github.com/Chris-Z-85"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/chrisZ85/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <Typography sx={{ padding: "1rem" }}>
        © {currentYear}| Designed & coded by Chris Zbrojkiewicz
      </Typography>
    </Container>
  );
};

export default Footer;
