import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Stack,
  IconButton,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Heading from "./Heading";
import CV from "../Chris_Zbrojkiewicz_CV.pdf";
import refLetter from "../Spiced_Reference_Letter_Chris_Zbrojkiewicz.pdf";
import styled from "styled-components";
import chris_z from "../../src/images/chris_z.svg";
import spiced from "../../src/images/certificates/Full Stack Web Development.png";
import udemy from "../../src/images/certificates/Complete Web Developer.png";
import freecodecamp from "../../src/images/certificates/Responsive Web Design.png";
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
      <Grid item justifyContent="center">
        <Card
          sx={{
            padding: "2rem",
            width: "80vw",
          }}
        >
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            My name is <b>Chris</b> and I am a passionate
            <b> Frontend Developer </b>
            from Poland, based in the United Kingdom.
          </Typography>
          <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            I am currently searching for an opportunity as <b>Web Developer</b>.
          </Typography>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                flexDirection: "row-reverse",
                padding: "0px 0px",
                "& .MuiAccordionSummary-expandIconWrapper": {
                  transform: "rotate(-90deg)",
                },
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  transform: "rotate(-180deg)",
                },
              }}
            >
              <Typography>My Career</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                I first became familiar with <b>HTML</b>, <b>CSS</b> and{" "}
                <b>JavaScript</b> in late '90 when I got my dial-up modem
                internet connection and started to explore the web. This was the
                time when I have developed my first websites.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                After high school, I decided to continue my education in a
                college. In 2008 I graduated with a <b>Bachelor's degree</b> in{" "}
                <b>English and IT</b> and with a <b>Master's degree</b> in 2010.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                In 2011 I started a job as an <b>IT instructor</b> and a
                <b> Microsoft Academy Manager</b>, where I specialised in
                teaching
                <b> MS Office suite</b> (Word, Excel etc.) at{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.learndirect.com/"
                >
                  Learndirect
                </Link>{" "}
                - an education centre for adults in London.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Later, as a self-employed <b>IT instructor</b> (2012 - 2013), I
                delivered many training for accountants, corporate employees for
                educational institutions and international companies, e.g.{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.heineken.co.uk/"
                >
                  Heineken
                </Link>
                .
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                Then, in 2014 I started working for{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.statestreet.com/"
                >
                  State Street
                </Link>
                , an American Bank for investment funds, where I was processing
                transactions with accounting applications, working with
                spreadsheets and <b>automating processes with macros</b>.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                When I was employed by{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.comarch.com/"
                >
                  Comarch
                </Link>{" "}
                in 2016, I prepared and delivered training of their{" "}
                <b>Loyalty Management Software</b> for{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.etihad.com/en-gb/"
                >
                  Etihad Airways
                </Link>{" "}
                employees in Abu Dhabi, UAE.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                During my career, I have also gained extensive experience in
                <b> customer service</b> (2017 - 2019) while working for{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.cathaypacific.com/"
                >
                  Cathay Pacific Airlines
                </Link>
                ,{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="http://booking.com/"
                >
                  Booking.com
                </Link>{" "}
                and{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.boschservicesolutions.com/"
                >
                  Bosch
                </Link>{" "}
                - where I worked as <b>Technical Support</b> of the telematics
                online platform{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://rio.cloud/en/"
                >
                  RIO
                </Link>
                .
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                When{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://rio.cloud/en/"
                >
                  RIO
                </Link>
                's cooperation with{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.boschservicesolutions.com/"
                >
                  Bosch
                </Link>{" "}
                has come to an end, I decided to begin my journey into web
                development. I started to brush up on my web skills and began to
                learn Javascript. In January 2020 I started a three-month
                intensive <b>Full Stack Web Development </b>program at{" "}
                <Link
                  color="inherit"
                  target="_blank"
                  href="https://www.spiced-academy.com/en"
                >
                  SPICED Academy
                </Link>{" "}
                (see{" "}
                <Link color="inherit" target="_blank" href={refLetter}>
                  Letter of Reference)
                </Link>
                . I was able to complete it on time, just before a lockdown
                came.
              </Typography>
              <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                During a 'stay at home' time I continued studying web
                development by{" "}
                <b>
                  taking courses on learning platforms, making projects and
                  taking private lessons
                </b>
                . In autumn 2021 I moved with my family to Northern Ireland.
                Here I focused on practical learning by{" "}
                <b>building various projects</b> for my <b>portfolio</b>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Typography sx={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            I am currently searching for an opportunity as <b>Web Developer</b>.
          </Typography> */}
          <Typography
            sx={{
              fontSize: "1.25rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            <b>Check out my work. Get in touch. Let's work together !</b>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Rubik",
            }}
          >
            Education
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="BA: Information Technology" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="MA: English Language and Literature" />
              </ListItemButton>
            </ListItem>
          </List>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Rubik",
            }}
          >
            Certificates
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href={spiced}>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="Full Stack Web Development @ SPICED Academy, Berlin" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href={udemy}>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="The Complete Web Developer: Zero to Mastery @ Udemy" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href={freecodecamp}>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText primary="Responsive Web Design @ freeCodeCamp" />
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
        <Grid
          item
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "center", md: "flex-end" }}
          sx={{
            padding: "2rem",
            display: "flex",
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
              <g clipPath="url(#clip0)">
                <path
                  d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
                  fill="currentColor"
                  fillOpacity=".85"
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
              <IconButton
                color="primary"
                href="mailto:chris.z@aol.com"
                title="Email"
              >
                <EmailIcon sx={{ fontSize: 45 }} />
              </IconButton>
              <IconButton
                color="primary"
                href="https://github.com/Chris-Z-85"
                title="GitHub"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 45 }} />
              </IconButton>
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/chrisZ85/"
                title="LinkedIn"
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
            <Button variant="contained" href={CV} target="_blank" title="CV">
              My CV&nbsp;
              <CloudDownloadIcon fontSize="1rem" />
            </Button>
          </MiniCv>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
