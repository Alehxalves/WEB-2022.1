import Hero2 from "./Hero2";
import Enemy2 from "./Enemy2";
import Imgs from "../Imgs";

const Arena2 = () => {
  return (
    <div >
      <h1 className="fight">FIGHT</h1>
      <span className="arena">
          <Hero2  name="Itadori"imgUrl={Imgs.itadori} />
          <Enemy2 name="Hinami" imgUrl={Imgs.hanami}/>
      </span>
    </div>
  );
};

export default Arena2;
