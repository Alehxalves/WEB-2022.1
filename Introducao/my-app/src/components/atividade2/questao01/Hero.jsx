import React from "react";
import Baki from "./baki.png";

const Hero = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={Baki} alt={name} />
    </div>
  );
};

export default Hero;
