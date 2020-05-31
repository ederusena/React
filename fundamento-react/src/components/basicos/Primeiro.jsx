import React from "react";

export default function Primeiro() {
  const msg = "Seja bem vindo";
  return (
    <React.Fragment>
      <h2>Primeiro Componente em JSX</h2>
      <p>{msg}</p>
    </React.Fragment>
  );
}
