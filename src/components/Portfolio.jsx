import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Project from "./Project";
import gpt3 from "../../src/images/projects/gpt-3.png";
import polskieni from "../../src/images/projects/polskieni.png";
import fretboardmaster from "../../src/images/projects/fretboardmaster.png";
import Heading from "./Heading";

const Portfolio = () => {
  const projects = [
    {
      title: "GPT-3 OpenAI Website",
      subheading: "Figma project turned into reality!",
      description:
        "Fully functioning, modern and responsive React website based on a Figma design.",
      stack: ["React", "CSS BEM Model", "React Icons"],
      github: "https://github.com/Chris-Z-85/GTP3",
      demo: "https://gtp3-open-ai.netlify.app/",
      image: gpt3,
    },
    {
      title: "Polish Northern Ireland Community",
      subheading: "Sunday School in Northern Ireland",
      description: "Homepage of Polish Network in Northern Ireland",
      stack: ["React", "Contentful"],
      github: "",
      demo: "https://pss-craigavon.netlify.app/",
      image: polskieni,
    },
    {
      title: "Fretboard Master",
      subheading: "Fretboard tool for guitarists",
      description:
        "The Fretboard Master is a tool designed to help musicians memorize fret note names in an easy and fun way. It features the guitar, bass or ukulele customizable fretboard with multiples tools like tuning adjustment and note display. The game mode enables users to practize fretboard navigation skills on 3 difficulty levels.",
      stack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Chris-Z-85/fretboard-master.github.io",
      demo: "https://chris-z-85.github.io/fretboard-master.github.io/",
      image: fretboardmaster,
    },
  ];

  return (
    <Container>
      <Heading title="Portfolio" subtitle="My work" />
      <Typography textAlign="center" gutterBottom>
        Check out some of the stuff, that I have built.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {projects.map((project, index) => (
          <Project props={project} key={index} />
        ))}
      </Box>
      <Typography textAlign="center" gutterBottom>
        You can also find my other projects on{" "}
        <a href="https://github.com/Chris-Z-85">GitHub</a> and{" "}
        <a href="https://codepen.io/chris-z">CodePen</a>.
      </Typography>
    </Container>
  );
};

export default Portfolio;
