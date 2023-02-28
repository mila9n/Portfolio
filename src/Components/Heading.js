import React from "react";
import { HeadingStyle } from "./Styles/heading.styled";

const Heading = (props) => {
  return <HeadingStyle>{props.heading}</HeadingStyle>;
};

export default Heading;
