import React from "react";
import { AboutStyle } from "./Styles/about.styled";
import Heading from "./Heading";

const About = () => {
  return (
    <AboutStyle id="about">
      <div className="container">
        <Heading heading={"About Me"} />
        <p>
          Hello! My name is Milan and i create modern and dynamic web
          application using React. I use various components and libraries in the
          React ecosystem, such as React Router, Redux tool-kit and styled
          components. Through understanding of JavaScript, HTML and CSS.
        </p>
        <p>
          Open minded, always eager to learn new technologies and explore new
          possibilities in web development. In my down time i like to read,
          watch football or anime.
        </p>
      </div>
    </AboutStyle>
  );
};

export default About;
