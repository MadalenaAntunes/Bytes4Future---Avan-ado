import { useState } from "react";

export function NameGenerator() {
  //Criamos um state que começa com "Clique em Gerar"
  const [fullName, setFullName] = useState("Clique em Gerar");
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleClick = () => {
    //Percorrer os ficheiros json (São arrays) e escolher um valor aleatoriamente (Floor (random * length))
    //Adicionar a frase final no state
    let firstName = [
      "João",
      "Joana",
      "Maria",
      "Pedro",
      "Inês",
      "Miguel",
      "Madalena",
    ];
    let middleName = [
      "Silva",
      "Carvalho",
      "Pereira",
      "Ferreira",
      "Rodrigues",
      "Antunes",
    ];
    const firstNameIndex = Math.floor(Math.random() * firstName.length);
    const middleNameIndex = Math.floor(Math.random() * middleName.length);

    if (userName.trim() === "") {
      setFullName(
        `${firstName[firstNameIndex]} ${middleName[middleNameIndex]}`
      );
    } else {
      setFullName(`${userName} ${middleName[middleNameIndex]}`);
    }
  };

  //No return temos de ter um Título Principal = "Gerador de Nomes" e um botão que diz "Gerar" e um parágrafo que
  return (
    <div>
      <h1>Gerador de Nomes</h1>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Digite seu nome"
      />
      <button onClick={() => handleClick()}>Gerar</button>
      <p>{fullName}</p>
    </div>
  );
}
