import React from "react";
import Heading from "./Heading";
import { SkillsStyle } from "./Styles/skills.styled";
import skillsData from "./skills.data";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [skills] = React.useState(skillsData);

  const skillsContainer = skills.map((item) => {
    return <SkillCard icon={item.skill} name={item.name} key={item.name} />;
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
