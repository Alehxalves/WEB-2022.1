import React from "react";

function SituacaoIMC(IMC) {
  if (IMC < 17) {
    return <h3>Situação: Muito abaixo do peso.</h3>;
  } else if (IMC < 18.5) {
    return <h3>Situação: Abaixo do peso.</h3>;
  } else if (IMC < 25) {
    return <h3>Situação: Peso normal.</h3>;
  } else if (IMC < 30) {
    return <h3>Situação: Acima do peso.</h3>;
  } else if (IMC < 35) {
    return <h3>Situação: Obesidade I.</h3>;
  } else if (IMC < 40) {
    return <h3>Situação: Obsedidade II (severa).</h3>;
  } else {
    return <h3>Situação: Obsedidade III (mórbida).</h3>;
  }
}

const calcularIMC = (altura, peso) => peso / (altura * altura);

const IMC = (props) => {
  const { altura, peso } = props;
  const IMC = calcularIMC(altura, peso).toFixed(2);

  return (
    <div>
      <h3>
        A minha altura é {altura} e o meu peso é {peso} e o meu IMC é {IMC}
      </h3>
      <h4>{SituacaoIMC(IMC)}</h4>
    </div>
  );
};

export default IMC;