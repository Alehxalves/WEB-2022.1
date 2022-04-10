import Arena4 from "./Arena4"
import Hero4 from "./Hero4"
import Enemy4 from "./Enemy4"
import World from "./World";
import Imgs from "../Imgs"
import "../style.css"

function App() {
  return (
    <div className="App">
      <World>
        <Arena4 arena="Tokio Dome – Underground Arena">
          <Hero4 name="Baki" imgUrl={Imgs.baki}/>
          <Enemy4 name="Yujiro" imgUrl={Imgs.yujiro}/>
        </Arena4>

      </World>
    </div>
  )
}

export default App;