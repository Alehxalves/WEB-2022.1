import React from "react";
import "./style.css"
//import {Component} from "react";

// import Questao01 from "./components/Atividade1/Questao01";

// function AppQuestao1() {
//   return (
//     <div className="App">
//       <Questao01 />
//     </div>
//   );
// }

// import Questao02 from "./components/atividade1/Questao02";
// function AppQuestao2() {
//   return (
//     <div className="App">
//       <Questao02 />
//     </div>
//   );
// }

// import Questao03 from "./components/atividade1/Questao03";
// function AppQuestao3() {
//   return (
//     <div className="App">
//       <Questao03 />
//     </div>
//   );
// }

// import Questao04 from "./components/atividade1/Questao04";
// function AppQuestao4() {
//   return (
//     <div className="App">
//       <Questao04 />
//     </div>
//   );
// }

// import { CapitaoAmerica as Ca, ViuvaNegra as Vn } from "./components/vingadores/Avengers";

// function AppAvengers() {
//   return (
//     <div className="App">
//       <Ca nome = 'Alex'/>
//       <Vn nome = 'Alex'/>
//     </div>
//   )
// }

// import IMC from "./components/imc/IMC";

// function AppIMC() {
//   return (
//     <div className="AppImc">
//       <IMC altura={1.75} peso={76}/>
//     </div>
//   );
// }

// import Casa from "./components/hardcoded/Casa";
// import Personagem from "./components/hardcoded/Personagem";

// function AppGOT() {
//   return (
//     <div className="AppGOT">
//       <Casa show="Game Of Thrones" casa="Genérica" horario="Nobre">
//       <Personagem nome="Arya" />
//       <Personagem nome="Tyrion" />
//       <Personagem nome="Robert" />
//       <Personagem nome="Danerys" />
//       <Personagem nome="G.R.R.M" />
//       </Casa>
//     </div>
//   );
// }

// import Pai from "./components/filhoPai/Pai";

// function AppHardcoded() {
//   return (
//     <div className="AppHardcoded">
//       <Pai/>
//     </div>
//   )
// }

// import CidadeComClasse from "./components/cidades/CidadeComClasse";

// function AppCidade() {
//   return(
//     <div className="AppCidade">
//       <CidadeComClasse/>
//     </div>
//   )
// }

// import Arena from "./components/atividade2/questao02/Arena2"

// function App() {
//   return (
//     <div className="App">
//       <Arena/>
//     </div>
//   )
// }

// import Imgs from "./components/atividade2/Imgs"
// import Arena5 from "./components/atividade2/questao05/Arena5"
// import World2 from "./components/atividade2/questao05/World2";

// function App() {
//   return (
//     <div className="App">
//       <World2>
//         <Arena5 
//           nameArena="Kahn's Arena"
//           nameHero="Baki" imgHero={Imgs.baki}
//           nameEnemy="Yujiro" imgEnemy={Imgs.yujiro}
//         />
//         <Arena5 
//           nameArena="Kombat Temple"
//           nameHero="Itadori" imgHero={Imgs.itadori}
//           nameEnemy="Hanami" imgEnemy={Imgs.hanami}
//         />
//         <Arena5 
//           nameArena="Lost Bridge"
//           nameHero="Deku" imgHero={Imgs.deku}
//           nameEnemy="Dabi" imgEnemy={Imgs.dabi}
//         />
//       </World2>
//     </div>
//   )
// }

import Contador from './components/hooks/Contador'

function App() {
  return (
    <div className='App'>
      <Contador />
    </div>
    
  )
}

export default App;
