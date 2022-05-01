import Hero from "./Hero";
import Enemy from "./Enemy";

const Arena = () => {
  return (
    <div>
      <h1 className="fight">FIGHT</h1>
      <span className="arena">
        <Hero name="Baki" />
        <Enemy name="Yujiro" />
      </span>
    </div>
  );
};

export default Arena;
