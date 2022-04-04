import Hero2 from "./Hero2";
import Enemy2 from "./Enemy2";
import Imgs from "./Imgs";

const Arena2 = () => {
  return (
    <div className="img">
      <Hero2 name="Baki!" img={Imgs.imgHero} />
      <Enemy2 name="Yujiro!" img={Imgs.imgEnemy} />
    </div>
  );
};

export default Arena2;
