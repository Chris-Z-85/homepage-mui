import gpt3 from "../../src/images/projects/gpt-3.png";
import polskieni from "../../src/images/projects/polskieni.png";
import fretboardmaster from "../../src/images/projects/fretboardmaster.png";
import themoviesapp from "../../src/images/projects/themoviesapp.png";
import calc from "../../src/images/projects/calc.png";

const projects = [
  {
    id: 1,
    title: "The Calc App",
    subheading: "Responsive calculator with themes",
    description:
      "Simple calculator built according to the Frontend Mentor design (www.frontendmentor.io) with ability to change colour themes.",
    stack: ["HTML", "CSS", "BEM ", "JavaScript"],
    github: "https://github.com/Chris-Z-85/calculator-app",
    demo: "https://calc-chris-z.netlify.app",
    image: calc,
  },
  {
    id: 2,
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
    id: 3,
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

export default projects;
