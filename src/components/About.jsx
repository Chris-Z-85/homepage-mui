import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Stack,
  IconButton,
  Card,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Heading from "./Heading";
import Resume from "../Chris_Zbrojkiewicz_Resume.pdf";
import styled from "styled-components";
import chris_z from "../../src/images/chris_z.svg";
import { grey } from "@mui/material/colors/";

const MiniCv = styled.div`
  height: 200px;
  width: 150px;
  border: 2px solid ${grey[800]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;

const Line = styled.div`
  height: 1px;
  width: 100px;
  border: 1px solid ${grey[800]};
`;

const About = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginBottom="200px"
      id="about"
    >
      <Heading title="About" subtitle="Myself" />
      <Grid container justifyContent="center">
        <Card
          sx={{
            padding: "2rem",
          }}
        >
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            My name is <b>Chris Z.</b> and I am a passionate
            <b> Frontend Developer </b>
            from Poland, based in the United Kingdom.
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            I have working proficiency in <b>HTML, CSS, JavaScript</b> and
            <b> React</b>.
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            I am comfortable working with the <b>command line </b>
            and using <b>Git</b> version control.
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
            My current development environment consists of
            <b> macOS, Visual Studio Code</b> and <b>GitHub</b>.
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Check out my work. Get in touch. Let's work together !
          </Typography>
        </Card>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            padding: "2rem",
            display: "flex",
            alignItems: "flex-end",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Permanent Marker" }}>
              Get In Touch
            </Typography>
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
            <Stack spacing={2} direction="row">
              <IconButton color="primary" href="mailto:chris.z@aol.com">
                <EmailIcon sx={{ fontSize: 45 }} />
              </IconButton>
              <IconButton
                color="primary"
                href="https://github.com/Chris-Z-85"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 45 }} />
              </IconButton>
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/chrisZ85/"
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: 45 }} />
              </IconButton>
            </Stack>
          </Box>
          <MiniCv>
            <img src={chris_z} alt="Chris Z." width="55px" />
            <Line color="primary" />
            <Line />
            <Line />
            <Line />
            <Button variant="contained" href={Resume} target="_blank">
              Resume&nbsp;
              <CloudDownloadIcon fontSize="1rem" />
            </Button>
          </MiniCv>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
