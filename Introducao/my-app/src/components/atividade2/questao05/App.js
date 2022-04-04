import World2 from "./World2";
import Imgs from "../Imgs";
import Arena5 from "./Arena5";

function App() {
    return (
      <div className="App">
        <World2>
          <Arena5 
            nameArena="Kahn's Arena"
            nameHero="Baki" imgHero={Imgs.baki}
            nameEnemy="Yujiro" imgEnemy={Imgs.yujiro}
          />
          <Arena5 
            nameArena="Kombat Temple"
            nameHero="Itadori" imgHero={Imgs.itadori}
            nameEnemy="Hanami" imgEnemy={Imgs.hanami}
          />
          <Arena5 
            nameArena="Lost Bridge"
            nameHero="Deku" imgHero={Imgs.deku}
            nameEnemy="Dabi" imgEnemy={Imgs.dabi}
          />
        </World2>
      </div>
    )
  }
  
  export default App;