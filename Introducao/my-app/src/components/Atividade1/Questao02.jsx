import { Component } from "react";

/*
class Questao02 extends Component {
  render() {
    return (
      <div>
        <h1>Q2</h1>
        <h3>Curso: Sistemas de Informação</h3>
        <h3>Nome: Alex Alves</h3>
        <h3>Cidade: Quixadá - CE</h3>
      </div>
    );
  }
}
*/

class Questao02 extends Component {
  render() {
    const { curso, nome, cidade } = this.props;
    return (
      <div>
        <h3>Curso: {curso} </h3>
        <h3>Nome: {nome} </h3>
        <h3>Cidade: {cidade}</h3>
      </div>
    );
  }
}

export default Questao02;
