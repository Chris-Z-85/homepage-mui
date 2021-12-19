import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ColorModeContextProvider } from "./theme.context";

const App = () => {
  return (
    <ColorModeContextProvider>
      <Navbar />
      <Hero />
      <About />
    </ColorModeContextProvider>
  );
};

export default App;
