import Arena4 from "./Arena4"
import Hero4 from "./Hero4"
import Enemy4 from "./Enemy4"
import Imgs from "../Imgs"


function App() {
    return (
      <div className="App">
        <Arena4 nameArena="Tokio Dome – Underground Arena">
            <Hero4 name="Baki" imgUrl={Imgs.baki}/>
            <Enemy4 name="Yujiro" imgUrl={Imgs.yujiro}/>
        </Arena4>
      </div>
    )
}

export default App;