import React from "react";

export default props => {
  const { min, max } = props
  const random = parseInt(Math.floor(Math.random() * (max + min)) + min);
  return (
      <React.Fragment>
        <hr/>
        <h2>Numero gerado randomicamente</h2>
        <p>Valor minimo: {min}</p>
        <p>Valor maximo: {max}</p>
        <p>Valor Escolhido: {random}</p>
      </React.Fragment>
    )
}
