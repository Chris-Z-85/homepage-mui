import React from "react";
import { ColorModeContextProvider } from "./theme.context";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ColorModeContextProvider>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Hero />
      <About />
    </ColorModeContextProvider>
  );
};

export default App;
