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
        <IconButton color="primary" href="mailto:chris.z@aol.com" title="Email">
          <EmailIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="https://github.com/Chris-Z-85"
          title="GitHub"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/chrisZ85/"
          title="LinkedIn"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <Typography
        sx={{
          padding: "1rem",
          textAlign: "center",
          fontSize: { xs: "0.9rem", md: "1.10rem" },
        }}
      >
        © {currentYear}| Designed & coded by Chris Zbrojkiewicz
      </Typography>
    </Container>
  );
};

export default Footer;
