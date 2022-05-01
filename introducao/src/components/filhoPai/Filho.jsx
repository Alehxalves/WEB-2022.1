import React from "react";

const Filho = (props) => {
  return (
    <div>
        <button onClick={() => props.notificarPai("Oi pai, tudo bem?", 150)}>
            Enviar Mensagem para Meu Pai
        </button>
    </div>
  );
};

export default Filho;
