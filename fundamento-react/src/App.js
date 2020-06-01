import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Random from "./components/basicos/Random";

export default (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Random min='1' max='3'/>
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
    <Primeiro></Primeiro>
  </div>
);
