import React from "react";
import { HeaderStyle } from "./Styles/Header.styled";
import { FaBars, FaCaretRight } from "react-icons/fa";

const Header = () => {
  const [burgarButton, setBurgarButton] = React.useState(false);

  const handleClick = () => {
    setBurgarButton((prevValue) => !prevValue);
  };

  React.useEffect(() => {
    function handleResize() {
      setBurgarButton(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <HeaderStyle>
      <div className="container">
        <nav>
          <div>
            <a href="#">MT.</a>
          </div>
          <div className="button" onClick={handleClick}>
            <FaBars />
          </div>
          <div className={burgarButton ? "clicked" : null}>
            <div>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="https://mila9n.github.io/Resume/" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
