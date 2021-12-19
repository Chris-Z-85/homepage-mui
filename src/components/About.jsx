import React from "react";
import { Typography, Grid, Button, Stack } from "@mui/material";

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
        variant="h1"
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
        <Typography>
          <p>
            My name is <b>Chris Z.</b> and I am a passionate
            <b>Frontend Developer </b>from Poland, based in the United Kingdom.
          </p>
          <p>
            I have working proficiency in <b>HTML, CSS, JavaScript</b> and
            <b>React</b>.
          </p>
          <p>
            I am comfortable working with the <b>command line </b>and using
            <b> Git</b> version control.
          </p>
          <p>
            My current development environment consists of
            <b> macOS, Visual Studio Code</b> and <b>GitHub</b>.
          </p>
          <p>Check out my work. Get in touch. Let's work together!</p>
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          sx={{ width: "50%", padding: "2rem" }}
        >
          <Button variant="contained">
            Resume <CloudDownloadIcon fontSize="1rem" />
          </Button>
          <Stack spacing={2} direction="row">
            <EmailIcon size="large" />
            <GitHubIcon size="large" />
            <LinkedInIcon size="large" />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
