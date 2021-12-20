import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Stack,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const About = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        About
        <Typography variant="h3" component="div" gutterBottom>
          Myself
        </Typography>
      </Typography>
      <Grid container justifyContent="center" sx={{ width: "70vw" }}>
        <Typography variant="body1">
          <Typography variant="body1">
            My name is <b>Chris Z.</b> and I am a passionate
            <b>Frontend Developer </b>from Poland, based in the United Kingdom.
          </Typography>
          <Typography variant="body1">
            I have working proficiency in <b>HTML, CSS, JavaScript</b> and
            <b>React</b>.
          </Typography>
          <Typography variant="body1">
            I am comfortable working with the <b>command line </b>and using
            <b> Git</b> version control.
          </Typography>
          <Typography variant="body1">
            My current development environment consists of
            <b> macOS, Visual Studio Code</b> and <b>GitHub</b>.
          </Typography>
          <p>Check out my work. Get in touch. Let's work together!</p>
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          sx={{
            width: "50%",
            padding: "2rem",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Download My Resume</Typography>
            <svg
              width="57"
              height="61"
              viewBox="0 0 57 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
                  fill="currentColor"
                  fill-opacity=".85"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path
                    transform="rotate(148.25 56.2 41.845)"
                    fill="#fff"
                    d="M56.2 41.845h35.638v49.209H56.2z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <Button
              variant="contained"
              href="../src/Chris_Zbrojkiewicz_Resume.pdf"
              target="_blank"
            >
              Resume <CloudDownloadIcon fontSize="1rem" />
            </Button>
          </Box>
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
