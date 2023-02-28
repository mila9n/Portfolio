import React from "react";

const Skill = (props) => {
  return (
    <div>
      <span>{props.icon}</span>
      <h5>{props.name}</h5>
    </div>
  );
};

export default Skill;
