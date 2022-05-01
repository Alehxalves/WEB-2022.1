import World from "./World";
import "../style.css"
import Imgs from "../Imgs";
import Arena3 from "./Arena3";

function App() {
  return (
    <div className="App">
      <World nameHero="Baki" imgHero={Imgs.baki}
          nameEnemy="Yujiro" imgEnemy={Imgs.yujiro}>
        <Arena3
        />
        <Arena3
        />
        <Arena3
        />
      </World>
    </div>
  )
}

export default App;