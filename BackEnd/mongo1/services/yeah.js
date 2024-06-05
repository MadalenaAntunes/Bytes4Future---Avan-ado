//funcao com nome get - sabe que estou em services

const { findAllYeah } = require("../data/yeah");

async function getAllYeah() {
  const yeah = await findAllYeah(); //essa collection é um array de objetos lá de data - nome da coleção é oq ela tem guardado
  const newArr = yeah.map((e) => { 
    //map faz um novo array - quero um obj igual mas só com os campos que pedi
      return {
          nome: e.nome,
          age: e.age,
        };
    });
    return newArr;
    //aqui dentro poderíamos: TIRAR CAMPOS NÃO NECESSÁRIOS DOS OBJETOS DA BD e outras coisas de lógica > filtrar obj...
}

module.exports = { getAllYeah };