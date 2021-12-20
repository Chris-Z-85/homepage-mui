import React from "react";
import { Container, Box, Stack, Button, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "@mui/icons-material/Link";

const Project = ({ props }) => {
  return (
    <Container sx={{ display: "flex" }}>
      <Box>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h5">{props.subheading}</Typography>
        <Typography>{props.description}</Typography>
        <ul>
          {props.stack.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <Stack direction="row" spacing={2}>
          {props.github !== "" && (
            <Button variant="contained" href={props.github} target="_blank">
              GITHUB <Link />
              <i class="fas fa-external-link-alt"></i>
            </Button>
          )}
          {props.demo !== "" && (
            <Button variant="outlined" href={props.demo} target="_blank">
              DEMO <Link /> <i class="fas fa-external-link-alt"></i>
            </Button>
          )}
        </Stack>
      </Box>
      <Box
        style={{
          border: "3px solid grey",
          borderRadius: "10px",
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
        </Box>
        <a href={props.demo} target="__blank">
          <img src={props.image} alt={props.title} style={{ width: "40vw" }} />
        </a>
      </Box>
    </Container>
  );
};

export default Project;
