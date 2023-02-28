import React from "react";
import Heading from "./Heading";
import { SkillsStyle } from "./Styles/skills.styled";
import skillsData from "./skills.data";
import Skill from "./Skill";

const Skills = () => {
  const [skills] = React.useState(skillsData);

  const skillsContainer = skills.map((item) => {
    return <Skill icon={item.skill} name={item.name} key={item.id} />;
  });

  return (
    <SkillsStyle id="skills">
      <div className="container">
        <Heading heading={"Skills"} />
        <div>{skillsContainer}</div>
      </div>
    </SkillsStyle>
  );
};

export default Skills;
