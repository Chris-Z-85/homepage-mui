import gpt3 from "../../src/images/projects/gpt-3.png";
import polskieni from "../../src/images/projects/polskieni.png";
import fretboardmaster from "../../src/images/projects/fretboardmaster.png";
import homepage from "../../src/images/projects/homepage.png";
import thechatapp from "../../src/images/projects/thechatapp.png";
import themoviesapp from "../../src/images/projects/themoviesapp.png";

const projects = [
  {
    id: 1,
    title: "The Movies App",
    subheading: "Fully responsive movies application",
    description:
      "Website with movies built in React using The Movie Database API (TMDB - www.themoviedb.org).",
    stack: ["React", "SASS", "API ", "AXIOS"],
    github: "https://github.com/Chris-Z-85/movies-app",
    demo: "https://themoviesapp.netlify.app",
    image: themoviesapp,
  },
  {
    id: 2,
    title: "GPT-3 OpenAI Website",
    subheading: "Figma project turned into reality!",
    description:
      "Fully functioning, modern and responsive React website based on a Figma design.",
    stack: ["React", "BEM Model", "React Icons"],
    github: "https://github.com/Chris-Z-85/GTP3",
    demo: "https://gtp3-open-ai.netlify.app/",
    image: gpt3,
  },
  {
    id: 3,
    title: "Homepage",
    subheading: "My personal homepage with Portfolio",
    description: "React application designed and built by myself.",
    stack: ["React", "Material UI", "Formik & Yup"],
    github: "https://github.com/Chris-Z-85/homepage-mui",
    demo: "https://chris-z.dev/",
    image: homepage,
  },
  {
    id: 4,
    title: "The Chat App",
    subheading: "Firebase Chat Application",
    description:
      "Chat Application (chatengine.io) created with React (Routing, Context API) and Firebase (Social Login) including Google and Facebook login authentication.",
    stack: ["React", "Firebase", "Chat Engine", "REST API"],
    github: "https://github.com/Chris-Z-85/the-chat-app",
    demo: "https://the-chat-app.netlify.app",
    image: thechatapp,
  },
  {
    id: 5,
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
    id: 6,
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

export default projects;
