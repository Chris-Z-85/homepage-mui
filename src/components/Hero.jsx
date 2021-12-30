import React from "react";
import { Grid, Typography, Button, Stack, Link } from "@mui/material";
import Chris from "../images/chris_z-circle.svg";
import Typewriter from "typewriter-effect";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      height="100vh"
      id="home"
    >
      <Grid item sx={{ height: { xs: "85vh", md: "70vh" } }}>
        <Grid
          container
          spacing={5}
          justifyContent={{ xs: "space-evenly", md: "space-evenly" }}
          alignItems="center"
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item>
            <Typography
              component="div"
              sx={{
                mb: { xs: 2, md: 5 },
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
              color="primary"
            >
              Hey, my name is
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                mb: { xs: 2, md: 5 },
                fontSize: { xs: "3rem", md: "4rem" },
              }}
            >
              Chris Z.
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{
                mb: { xs: 2, md: 5 },
                fontSize: { xs: "2rem", md: "3rem" },
              }}
              color="primary"
            >
              I'm Frontend Developer
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mb: { xs: 2, md: 5 },
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontFamily: "Monospace",
              }}
            >
              <Typewriter
                options={{
                  strings: ["I build websites.", "Check my projects!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Link href="#about" underline="none" color="inherit">
                <Button variant="outlined" sx={{ width: "150px" }}>
                  About me <ArrowForwardIosIcon fontSize="1rem" />
                </Button>
              </Link>
              <Link href="#portfolio" underline="none" color="inherit">
                <Button variant="outlined" sx={{ width: "150px" }}>
                  My works <ArrowForwardIosIcon fontSize="1rem" />
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item sx={{ height: { xs: "300px", md: "500px" } }}>
            <img src={Chris} alt="Chris Z." style={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Grid>
      <ScrollDown />
    </Grid>
  );
};

export default Hero;
