import React from "react";
import { GloblaStyle } from "./Components/Styles/GloblaStyle";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <GloblaStyle />
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
