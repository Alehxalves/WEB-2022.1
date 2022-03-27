/*
function Questao01() {
  return (
    <div>
      <h1>Q1</h1>
      <h3>Curso: Sistemas de Informação</h3>
      <h3>Nome: Alex Alves</h3>
      <h3>Cidade: Quixadá - CE</h3>
    </div>
  );
}

const Questao01 = () => (
  <div>
    <h1>Q1</h1>
    <h3>Curso: Sistemas de Informação</h3>
    <h3>Nome: Alex Alves</h3>
    <h3>Cidade: Quixadá - CE</h3>
  </div>
);*/

const Questao01 = (props) => {
  const { curso, nome, cidade } = props;
  return (
    <div>
      <h3>Curso: {curso}</h3>
      <h3>Nome: {nome}</h3>
      <h3>Cidade: {cidade}</h3>
    </div>
  );
};

export default Questao01;
