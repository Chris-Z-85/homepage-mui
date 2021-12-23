import React from "react";
import { Container, Box, Stack, Button, Typography, Card } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "@mui/icons-material/Link";
import { grey } from "@mui/material/colors/";

const Project = ({ props }) => {
  return (
    <Container
      sx={{ display: "flex", gap: "3rem", alignItems: "center" }}
      style={props.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h5">{props.subheading}</Typography>
        <Typography>{props.description}</Typography>
        <ul>
          {props.stack.map((item) => (
            <li style={{ listStyle: "square inside" }}>{item}</li>
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
              variant="contained"
              href={props.github}
              target="_blank"
              sx={{ width: "120px" }}
            >
              GITHUB <Link />
              <i class="fas fa-external-link-alt"></i>
            </Button>
          )}
          {props.demo !== "" && (
            <Button
              variant="contained"
              href={props.demo}
              target="_blank"
              sx={{ width: "120px" }}
            >
              DEMO <Link /> <i class="fas fa-external-link-alt"></i>
            </Button>
          )}
        </Stack>
      </Card>
      <a href={props.demo} target="__blank">
        <Box
          sx={{
            border: "3px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            width: "35vw",
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
          <img src={props.image} alt={props.title} style={{ width: "100%" }} />
        </Box>
      </a>
    </Container>
  );
};

export default Project;
