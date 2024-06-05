import React, { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);
  const handleChange = (diff) => {
    setValor(valor + diff);
  };

  return (
    <div>
      <p>{valor}</p>
      <button onClick={() => handleChange(-1)}>Decrementar</button>
      <button onClick={() => handleChange(1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
