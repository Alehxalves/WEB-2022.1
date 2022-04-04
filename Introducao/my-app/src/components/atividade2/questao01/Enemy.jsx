import React from "react";
import Yurijo from "./yujiro.png";

const Enemy = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={Yurijo} alt={name} />
    </div>
  );
};

export default Enemy;
