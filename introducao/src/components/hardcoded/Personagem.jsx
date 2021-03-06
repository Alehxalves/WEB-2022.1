import React, { Component } from "react";

// class Personagem extends Component {
//   render() {
//     const { nome, casa } = this.props;
//     return (
//       <div>
//         <h2>
//           Personagem {nome} da casa {casa}
//         </h2>
//       </div>
//     );
//   }
// }

const Personagem = (props) => {
  const { nome, casa, horario } = props;
  return (
    <div>
      <h2>
        Personagem {nome} da casa {casa} no horário {horario}
      </h2>
    </div>
  );
};

export default Personagem;
