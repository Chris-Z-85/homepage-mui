import React from "react";
import { Grid, Box, Stack, Button, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { deepPurple, grey } from "@mui/material/colors/";

const Project = ({ props }) => {
  return (
    <Grid
      container
      flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
      gap="3rem"
      alignItems="center"
      justifyContent="center"
      sx={props.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <Grid
        item
        width={{ xs: "100%", md: "50%", lg: "50%", lx: "50%" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            color: `${deepPurple[500]}`,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
          {props.subheading}
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
          {props.description}
        </Typography>
        <ul>
          {props.stack.map((item, index) => (
            <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
              <li style={{ listStyle: "square inside" }} key={index}>
                {item}
              </li>
            </Typography>
          ))}
        </ul>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.github !== "" && (
            <Button
              variant="outlined"
              href={props.github}
              target="_blank"
              sx={{ width: "120px" }}
            >
              GITHUB
            </Button>
          )}
          {props.demo !== "" && (
            <Button
              variant="outlined"
              href={props.demo}
              target="_blank"
              sx={{ width: "120px" }}
            >
              DEMO
            </Button>
          )}
        </Stack>
      </Grid>
      <a href={props.demo} target="__blank">
        <Grid
          item
          width={{ xs: "70vw", md: "30vw" }}
          sx={{
            border: "3px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              borderBottom: "2px solid grey",
              display: "flex",
              gap: "5px",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ fill: "#FF4A4A", fontSize: "1rem" }} />
            <CircleIcon sx={{ fill: "#FEB83D", fontSize: "1rem" }} />
            <CircleIcon sx={{ fill: "#01C542", fontSize: "1rem" }} />
            <Box
              sx={{
                backgroundColor: `${grey[800]}`,
                width: "600px",
                borderRadius: "5px",
              }}
            ></Box>
          </Box>
          <img src={props.image} alt={props.title} />
        </Grid>
      </a>
    </Grid>
  );
};

export default Project;
