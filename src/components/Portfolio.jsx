import React, { useState } from "react";
import { Card, Container, Box, Typography, Button, Stack } from "@mui/material";
import Project from "./Project";
import Heading from "./Heading";
import { deepPurple } from "@mui/material/colors/";
import projects from "./projects";

const Portfolio = () => {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  const filterItem = (filter) => {
    const filteredProjects = projects.filter((proj) => {
      return proj.stack.includes(filter);
    });
    setProjectsToDisplay(filteredProjects);
  };

  return (
    <article>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          marginTop: "2rem",
        }}
        id="portfolio"
      >
        <Heading title="Portfolio" subtitle="My work" />
        <Typography
          textAlign="center"
          sx={{ fontSize: "1.25rem", marginBottom: "2rem" }}
        >
          Check out some of the stuff, that&nbsp;I&nbsp;have built.
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          spacing={2}
        >
          <Button onClick={() => setProjectsToDisplay(projects)}>All</Button>
          <Button onClick={() => filterItem("HTML")}>HTML</Button>
          <Button onClick={() => filterItem("CSS")}>CSS</Button>
          <Button onClick={() => filterItem("JavaScript")}>JavaScript</Button>
          <Button onClick={() => filterItem("React")}>React</Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {projectsToDisplay.map((project, index) => (
            <Card sx={{ padding: "20px", width: "80vw" }} key={index}>
              <Project props={project} key={index} />
            </Card>
          ))}
        </Box>
        <Typography
          textAlign="center"
          sx={{ fontSize: "1.25rem", marginTop: "2rem" }}
        >
          You can also find many of my other projects on&nbsp;
          <a
            href="https://github.com/Chris-Z-85?tab=repositories"
            target="__blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              viewBox="-0.122 175.062 480.244 129.875"
            >
              <g fill={`${deepPurple[500]}`}>
                <path d="M92.375 230.65H52.019a1.887 1.887 0 0 0-1.886 1.886v19.731a1.89 1.89 0 0 0 1.886 1.889h15.743v24.513s-3.535 1.206-13.308 1.206c-11.53 0-27.637-4.214-27.637-39.632 0-35.425 16.772-40.087 32.518-40.087 13.63 0 19.502 2.401 23.238 3.556 1.174.36 2.26-.808 2.26-1.851l4.502-19.063c0-.487-.165-1.075-.721-1.474-1.517-1.082-10.774-6.262-34.16-6.262-26.941 0-54.576 11.463-54.576 66.562 0 55.103 31.64 63.313 58.302 63.313 22.076 0 35.468-9.434 35.468-9.434.552-.306.612-1.077.612-1.431v-61.537c0-1.04-.844-1.885-1.885-1.885M300.354 181.664a1.88 1.88 0 0 0-1.873-1.896h-22.724a1.889 1.889 0 0 0-1.882 1.896l.006 43.913h-35.419v-43.913a1.882 1.882 0 0 0-1.875-1.896h-22.722a1.887 1.887 0 0 0-1.877 1.896v118.904c0 1.048.843 1.901 1.877 1.901h22.722c1.039 0 1.875-.854 1.875-1.901v-50.86h35.419l-.062 50.86c0 1.048.844 1.901 1.883 1.901h22.777c1.041 0 1.873-.854 1.875-1.901V181.664M135.254 197.268c0-8.183-6.56-14.795-14.653-14.795-8.085 0-14.65 6.612-14.65 14.795 0 8.173 6.565 14.802 14.65 14.802 8.093 0 14.653-6.629 14.653-14.802M133.629 275.486V220.6a1.89 1.89 0 0 0-1.88-1.895h-22.651c-1.039 0-1.969 1.072-1.969 2.115v78.634c0 2.312 1.44 2.998 3.304 2.998h20.408c2.239 0 2.788-1.1 2.788-3.034v-23.932M386.71 218.884h-22.549c-1.034 0-1.876.852-1.876 1.901v58.302s-5.729 4.192-13.859 4.192c-8.13 0-10.287-3.689-10.287-11.65v-50.844c0-1.049-.841-1.901-1.875-1.901h-22.886c-1.032 0-1.879.852-1.879 1.901v54.693c0 23.646 13.179 29.431 31.31 29.431 14.873 0 26.864-8.216 26.864-8.216s.571 4.329.829 4.843c.259.512.932 1.029 1.659 1.029l14.56-.064c1.032 0 1.879-.854 1.879-1.898l-.008-79.817c0-1.05-.843-1.902-1.882-1.902M439.445 283.207c-7.821-.238-13.126-3.788-13.126-3.788v-37.653s5.233-3.208 11.654-3.782c8.12-.727 15.944 1.726 15.944 21.095.001 20.426-3.53 24.457-14.472 24.128zm8.894-66.993c-12.807 0-21.518 5.714-21.518 5.714v-40.263c0-1.05-.839-1.897-1.875-1.897h-22.787a1.887 1.887 0 0 0-1.878 1.897v118.903c0 1.048.842 1.901 1.881 1.901h15.811c.711 0 1.25-.367 1.648-1.009.393-.639.96-5.482.96-5.482s9.318 8.83 26.957 8.83c20.708 0 32.584-10.504 32.584-47.154 0-36.651-18.967-41.44-31.783-41.44M198.936 218.695h-17.045l-.026-22.519c0-.852-.439-1.278-1.424-1.278h-23.228c-.903 0-1.388.398-1.388 1.265v23.271s-11.64 2.809-12.427 3.037a1.886 1.886 0 0 0-1.361 1.812v14.623c0 1.052.84 1.898 1.879 1.898h11.909v35.178c0 26.13 18.328 28.697 30.696 28.697 5.651 0 12.411-1.814 13.527-2.228.675-.248 1.067-.947 1.067-1.705l.019-16.086c0-1.05-.886-1.897-1.884-1.897-.993 0-3.534.404-6.15.404-8.372 0-11.209-3.893-11.209-8.932l-.001-33.432h17.046c1.039 0 1.88-.847 1.88-1.898v-18.317a1.884 1.884 0 0 0-1.88-1.893" />
              </g>
            </svg>
          </a>
          .
        </Typography>
      </Container>
    </article>
  );
};

export default Portfolio;
