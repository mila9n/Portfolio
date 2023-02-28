import React from "react";
import { AboutStyle } from "./Styles/about.styled";
import Heading from "./Heading";

const About = () => {
  return (
    <AboutStyle id="about">
      <div className="container">
        <Heading heading={"About Me"} />
        <p>
          Hello! My name is Milan and i develop fully responsive web application
          using React js., add functionality into it with javascript & make it
          look attractive with styled components.
        </p>
        <p>
          Open minded, hunger to learn new things and well organized. In my down
          time i like to read, watch football or anime.
        </p>
      </div>
    </AboutStyle>
  );
};

export default About;
