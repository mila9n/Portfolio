import React from "react";
import { IntroductionStyle } from "./Styles/introduction.styled";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Introduction = () => {
  return (
    <IntroductionStyle>
      <div className="container">
        <div>
          <span className="greeting">Hello, i'm </span>
          <h2>
            Milan <span className="outline">Thakur</span>
          </h2>
          <h3>Junior Web Developer</h3>
          <p>
            I'm junior frontend developer, creating modern & dynamic web
            application with React js.
          </p>
          <div>
            <a
              href="https://github.com/mila9n"
              target="_blank"
              className="github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/milanthakur8999/"
              target="_blank"
              className="linkedin"
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
