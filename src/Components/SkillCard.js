import React from "react";

const SkillCard = (props) => {
  return (
    <div>
      <span className={props.name.toLowerCase()}>{props.icon}</span>
      <h5>{props.name}</h5>
    </div>
  );
};

export default SkillCard;
