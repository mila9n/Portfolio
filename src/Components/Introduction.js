import React from "react";
import { IntroductionStyle } from "./Styles/introduction.styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Introduction = () => {
  return (
    <IntroductionStyle>
      <div className="container">
        <div>
          <span className="greeting">Hello, i'm </span>
          <h2>
            Milan <span className="outline">Thakur</span>
          </h2>
          <h3>Junior React web developer</h3>
          <p>
            I'm a junior frontend developer who builds modern and dynamic web
            apps using React JS.
          </p>
          <div>
            <a
              href="https://github.com/mila9n"
              target="_blank"
              className="github"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/milanthakur8999/"
              target="_blank"
              className="linkedin"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div>
          <img src="./images/profile2.png" alt="profile illustration" />
        </div>
      </div>
    </IntroductionStyle>
  );
};

export default Introduction;
