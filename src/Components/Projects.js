import React from "react";
import Heading from "./Heading";
import { ProjectsStyle } from "./Styles/projects.styled";
import { projectData } from "./ProjectsData";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [projects] = React.useState(projectData);

  const projectsMap = projects.map((item, index) => {
    return (
      <ProjectDetail
        key={index}
        title={item.title}
        tags={item.tags}
        description={item.description}
        img={item.img}
        link={item.link}
        live={item.live}
      />
    );
  });

  return (
    <ProjectsStyle id="projects">
      <Heading heading={"Projects"} />
      {projectsMap}
    </ProjectsStyle>
  );
};

export default Projects;
