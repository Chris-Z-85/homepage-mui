import React from "react";
import { Grid, Typography, Button, Stack } from "@mui/material";
import Chris from "../images/chris_z-circle.svg";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <Grid container justifyContent="center" sx={{ height: "100vh" }}>
      <Grid item>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "70vw", height: "80vh" }}
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
            <Stack spacing={2} direction="row">
              <Button variant="outlined" sx={{ width: "150px" }}>
                About me <ArrowForwardIosIcon fontSize="1rem" />
              </Button>
              <Button variant="outlined" sx={{ width: "150px" }}>
                My works <ArrowForwardIosIcon fontSize="1rem" />
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6} md={4}>
            <img src={Chris} alt="Chris Z." />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
