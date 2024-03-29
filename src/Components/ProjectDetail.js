import React from "react";
import { ProjectDetailStyle } from "./Styles/ProjectDetail.styled";
import { FaAngleRight } from "react-icons/fa";

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
        <a
          href={props.live}
          target="_blank"
          className="tablet-image"
          rel="noreferrer"
        >
          <img src={props.img} alt="projectimage" />
        </a>
        <p>{props.description}</p>
        <div className="live__link">
          <a href={props.live} target="_blank" rel="noreferrer">
            Go live
            <span>
              <FaAngleRight />
            </span>
          </a>
        </div>
        <div className="link">
          <a href={props.link} target="_blank" rel="noreferrer">
            View code
            <span>
              <FaAngleRight />
            </span>
          </a>
        </div>
      </div>

      <div className="image">
        <a href={props.live} target="_blank" rel="noreferrer">
          <img src={props.img} alt="project " />
        </a>
      </div>
    </ProjectDetailStyle>
  );
};

export default ProjectDetail;
