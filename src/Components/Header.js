import React from "react";
import { HeaderStyle } from "./Styles/Header.styled";

const Header = () => {
  const [burgerButton, setBurgerButton] = React.useState(false);

  const handleClick = () => {
    setBurgerButton((prevValue) => !prevValue);
  };

  // React.useEffect(() => {
  //   function handleResize() {
  //     setBurgerButton(false);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  return (
    <HeaderStyle>
      <div className="container">
        <nav>
          <div>
            <a href="#introduction">MT.</a>
          </div>
          <div className="button" onClick={handleClick}>
            <div className={burgerButton ? "bar bar1" : "bar"}></div>
            <div className={burgerButton ? "bar bar2" : "bar"}></div>
            <div className={burgerButton ? "bar bar3" : "bar"}></div>
          </div>
          <div className={burgerButton ? "clicked nav_links" : "nav_links"}>
            <div>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="./pdf/Milan-cv.pdf" target="_blank">
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
