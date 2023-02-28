import React from "react";
import { ProjectDetailStyle } from "./Styles/ProjectDetail.styled";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectDetail = (props) => {
  return (
    <ProjectDetailStyle>
      <div className="details">
        <h3>{props.title}</h3>
        <div className="tags">
          {props.tags.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <p>{props.description}</p>
        <div className="link">
          <a href={props.link} target="_blank">
            View code
            <span>&#8594;</span>
          </a>
        </div>
      </div>

      <div className="image">
        <img src={props.img} />
      </div>
    </ProjectDetailStyle>
  );
};

export default ProjectDetail;
