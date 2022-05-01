import React from "react";
import Filho from "./Filho";

const Pai = () => {
  function mensagemRecebidaDoMeuFilho(msg, grana) {
    alert(`Recebi mensagem do meu filho: ${msg}, pediu R$${grana} emprestado.`);
  }

  return (
    <div>
      <Filho notificarPai={mensagemRecebidaDoMeuFilho} />
    </div>
  );
};

export default Pai;
