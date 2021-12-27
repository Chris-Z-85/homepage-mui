import React from "react";
import { ColorModeContextProvider } from "./theme.context";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

const App = () => {
  return (
    <ColorModeContextProvider>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </ColorModeContextProvider>
  );
};

export default App;
