import React from "react";
import { Grid, Typography, Button, Stack, Link } from "@mui/material";
import Chris from "../images/chris_z-circle.svg";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      marginBottom="200px"
      id="home"
    >
      <Grid item>
        <Grid
          container
          spacing={10}
          rowSpacing={15}
          justifyContent={{ xs: "space-evenly", md: "space-evenly" }}
          alignItems="center"
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              component="div"
              sx={{ mb: 5 }}
              color="primary"
            >
              Hey, my name is
            </Typography>
            <Typography variant="h2" component="div" sx={{ mb: 5 }}>
              Chris Z.
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ mb: 5 }}
              color="primary"
            >
              I'm Frontend Developer
            </Typography>
            <Typography variant="h4" component="div" sx={{ mb: 5 }}>
              I build websites.
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
          <Grid item>
            <img src={Chris} alt="Chris Z." style={{ height: "400px" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
