import React from "react";
import { AboutStyle } from "./Styles/about.styled";
import Heading from "./Heading";

const About = () => {
  return (
    <AboutStyle id="about">
      <div className="container">
        <Heading heading={"About Me"} />
        <p>
          Hi there! My name is Milan and I'm a fresher in web development, with
          a focus on creating modern and dynamic applications using React. I
          have been working with various components and libraries in the React
          ecosystem, such as React Router, Redux Tool-kit, and Styled
          Components, and have gained a solid understanding of JavaScript, HTML,
          and CSS. With my enthusiasm and dedication, I am eager to build highly
          functional and visually appealing applications using React.
        </p>
        <p>
          I am an open-minded web developer who is always eager to learn new
          technologies and explore new possibilities in this field. During my
          downtime, I enjoy reading, watching football, and learning about
          astrophysics.
        </p>
      </div>
    </AboutStyle>
  );
};

export default About;
