import React from "react";

const Enemy4 = (props) => {
  const {name, imgUrl, arena} = props;
  return (
    <div className="personagem">
      <h1>{name}</h1>
      <h1 className="nameArena">Estou lutando na Arena {arena}</h1>
      <img src={imgUrl} alt={name} id="img"/>
    </div>
  );
};

export default Enemy4;
