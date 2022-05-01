import React from "react";

const Hero4 = (props) => {
  const { name, imgUrl, arena} = props;
  return (
    <div className="personagem">
      <h1>{arena}</h1>
      <h1>{name}</h1>
      <img src={imgUrl} alt={name} id="img"/>
    </div>
  );
};

export default Hero4;
