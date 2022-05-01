import React from "react";

const Enemy = (props) => {
  const { name, imgUrl } = props;
  return (
    <div className="personagem">
      <h1>{name}</h1>
      <img src={imgUrl} alt={name} id="img"/>
    </div>
  );
};

export default Enemy;