import React from "react";
import { Card, Container, Box, Typography } from "@mui/material";
import Project from "./Project";
import gpt3 from "../../src/images/projects/gpt-3.png";
import polskieni from "../../src/images/projects/polskieni.png";
import fretboardmaster from "../../src/images/projects/fretboardmaster.png";
import homepage from "../../src/images/projects/homepage.png";
import thechatapp from "../../src/images/projects/thechatapp.png";
import Heading from "./Heading";
import { deepPurple } from "@mui/material/colors/";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
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
      id: 2,
      title: "Homepage",
      subheading: "My personal homepage with Portfolio",
      description: "React application designed and built by myself.",
      stack: ["React", "Material UI", "Formik & Yup"],
      github: "https://github.com/Chris-Z-85/homepage-mui",
      demo: "https://chris-z.netlify.app/",
      image: homepage,
    },
    {
      id: 3,
      title: "The Chat App",
      subheading: "Firebase Chat Application",
      description:
        "Chat Application created with React and Firebase including Google and Facebook login authentication.",
      stack: [
        "React (Routing, Context API)",
        "Firebase (Social Login)",
        "Chat Engine (https://chatengine.io/)",
        "REST API",
      ],
      github: "https://github.com/Chris-Z-85/the-chat-app",
      demo: "https://the-chat-app.netlify.app",
      image: thechatapp,
    },
    {
      id: 4,
      title: "Polish Northern Ireland Community",
      subheading: "Polish Primary School in Northern Ireland",
      description:
        "Homepage of the Polish Primary School organized by the Polish Network in Northern Ireland.",
      stack: ["React", "Contentful"],
      github: "",
      demo: "https://pss-craigavon.netlify.app/",
      image: polskieni,
    },
    {
      id: 5,
      title: "Fretboard Master",
      subheading: "Fretboard tool for guitarists",
      description:
        "A tool designed to help guitarists memorize fret note names. It features the guitar, bass or ukulele customizable fretboard with multiples tools like tuning adjustment and note display. The game mode enables users to practize fretboard navigation skills on 3 difficulty levels.",
      stack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Chris-Z-85/fretboard-master.github.io",
      demo: "https://chris-z-85.github.io/fretboard-master.github.io/",
      image: fretboardmaster,
    },
  ];

  return (
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        {projects.map((project, index) => (
          <Card sx={{ padding: "20px", width: "80vw" }} key={index}>
            <Project props={project} key={index} />
          </Card>
        ))}
      </Box>
      <Typography
        textAlign="center"
        sx={{ fontSize: "1.25rem", marginTop: "2rem" }}
      >
        You can also find my other projects on&nbsp;
        <a href="https://github.com/Chris-Z-85" target="__blank">
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
        &nbsp; and &nbsp;
        <a href="https://codepen.io/chris-z" target="__blank">
          <svg
            height="16"
            viewBox="0 0 512 93"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
          >
            <g fill={`${deepPurple[500]}`}>
              <path d="M32.133 22.9c5.739 0 10.998 2.075 15.087 5.504l5.557-6.624c-5.587-4.696-12.788-7.532-20.642-7.532C14.415 14.248 0 28.664 0 46.382 0 64.104 14.416 78.52 32.137 78.514c7.854 0 15.054-2.836 20.641-7.532l-5.557-6.624a23.38 23.38 0 0 1-15.086 5.504c-12.947 0-23.482-10.533-23.482-23.48C8.652 33.436 19.188 22.897 32.137 22.9h-.004zM210.01 16.104h-17.302a4.325 4.325 0 0 0-4.324 4.324v51.907a4.328 4.328 0 0 0 4.324 4.325h17.303c16.697 0 30.279-13.583 30.279-30.279 0-16.698-13.58-30.281-30.283-30.277h.004zm0 51.907h-12.976V24.755h12.977c11.926 0 21.623 9.706 21.623 21.629.005 11.931-9.697 21.624-21.627 21.627h.004zM263.712 20.43v51.907a4.328 4.328 0 0 0 4.325 4.324h36.048v-8.65h-31.72V50.707h20.185v-8.65h-20.186V24.754h31.72v-8.65h-36.047a4.316 4.316 0 0 0-4.32 4.324h-.005zM394.649 20.43v51.907a4.328 4.328 0 0 0 4.325 4.324h36.046v-8.65H403.3V50.707h20.186v-8.65H403.3V24.754h31.72v-8.65h-36.044a4.32 4.32 0 0 0-4.325 4.324h-.001zM353.483 16.104h-18.746a4.325 4.325 0 0 0-4.324 4.324v56.233h8.652V50.707h14.419c9.54 0 17.302-7.762 17.302-17.301-.001-9.54-7.763-17.306-17.307-17.302h.004zm0 25.952h-14.42v-17.3h14.42c4.77 0 8.649 3.877 8.649 8.65 0 4.773-3.879 8.654-8.653 8.65h.004zM502.65 16.104v44.285l-35.607-42.73a4.321 4.321 0 0 0-4.795-1.298 4.328 4.328 0 0 0-2.854 4.067v56.233h8.652V32.377l35.607 42.728a4.315 4.315 0 0 0 4.79 1.296 4.328 4.328 0 0 0 2.854-4.067V16.101h-8.647v.003zM163.809 31.635c-.021-.112-.04-.224-.07-.333-.018-.066-.04-.128-.062-.193a3.968 3.968 0 0 0-.102-.288c-.027-.066-.058-.13-.088-.193a3.51 3.51 0 0 0-.135-.263c-.035-.063-.075-.123-.113-.184a3.979 3.979 0 0 0-.5-.626c-.052-.052-.104-.105-.16-.156a3.27 3.27 0 0 0-.224-.187c-.06-.046-.118-.093-.18-.136-.023-.016-.042-.035-.066-.05L119.936.91a3.961 3.961 0 0 0-4.398 0L73.363 29.025c-.024.015-.043.034-.066.05-.062.044-.12.09-.18.135a3.102 3.102 0 0 0-.383.342 3.582 3.582 0 0 0-.501.63c-.039.061-.077.12-.113.184-.05.086-.093.174-.134.261-.03.064-.062.128-.089.193a3.979 3.979 0 0 0-.103.288c-.02.065-.043.128-.06.187-.03.109-.05.22-.07.333-.011.057-.025.113-.032.171a3.988 3.988 0 0 0-.035.518V60.44c0 .174.012.348.037.518.009.062.025.112.037.172.02.112.038.223.075.335.017.062.037.125.062.193.031.1.062.199.1.29.026.062.062.124.086.186a3.206 3.206 0 0 0 .423.682c.043.062.087.112.137.172.063.074.124.149.198.215.051.05.1.111.162.149.072.062.15.124.224.189.06.05.124.087.174.135.023.012.037.037.062.049l42.164 28.13c.666.448 1.43.672 2.2.668a3.987 3.987 0 0 0 2.2-.667l42.175-28.117c.023-.014.043-.032.065-.048.063-.044.121-.09.18-.136.078-.06.154-.124.226-.188.054-.049.106-.102.159-.154a3.56 3.56 0 0 0 .331-.387 5.507 5.507 0 0 0 .28-.423c.051-.086.095-.175.137-.264.03-.064.06-.127.088-.192a4.22 4.22 0 0 0 .102-.29c.021-.064.043-.127.062-.192.029-.11.049-.221.07-.333.01-.057.025-.113.03-.171.023-.172.036-.343.036-.519V32.325a4.22 4.22 0 0 0-.035-.518c-.01-.061-.029-.111-.041-.172h.006zm-46.073 24.129l-14.024-9.38 14.024-9.382 14.026 9.382-14.026 9.38zm-3.964-25.65L96.58 41.613 82.703 32.33l31.07-20.713v18.497zM89.448 46.382l-9.919 6.635v-13.27l9.92 6.635zm7.132 4.775l17.192 11.498V81.15l-31.07-20.715 13.878-9.282v.003zm25.122 11.495l17.192-11.498 13.878 9.282-31.07 20.713V62.652zm24.324-16.267l9.92-6.636v13.27l-9.92-6.637v.003zm-7.132-4.772l-17.192-11.498V11.617l31.07 20.713-13.878 9.283z" />
            </g>
          </svg>
        </a>{" "}
        .
      </Typography>
    </Container>
  );
};

export default Portfolio;
