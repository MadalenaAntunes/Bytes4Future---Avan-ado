// class Aluno {
// }

// const oMeuAluno = new Aluno()
// console.log(oMeuAluno)

// // Date
// // Math
// // const math = new Math() //Não é necessario

// Math.PI
// // oMeuAluno.nome

// Math.trunc(1.3) //1
// Math.floor(1.3) //1
// Math.ceil(1.3) //2

// Math.trunc(-1.3) //-1
// Math.floor(-1.3) //-2
// Math.ceil(-1.3) //-1

// let vInicial = 14285



// for (let i = 0; i < 10000; i++) {
//     vInicial = Math.max(vInicial - i, 0)
// }

// console.log(vInicial)


//N aleatorio entre 5 e 10 (inclusive)
// console.log(Math.floor(Math.random() * 6) + 5)

const nomes = ["Gregorio", "Gapoila", "Glauco", "Genoveva"]
const cognome = ["Alegre", "Sorridente", "Feliz", "Cansade"]
const apelidos = ["Almirante", "Reis", "Moreno", "Ferreira", "Costa"]

const indiceAleatorio = Math.floor(Math.random() * nomes.length)
const cAleatorio = Math.floor(Math.random() * cognome.length)
const indiceApelidoAleatorio = Math.floor(Math.random() * apelidos.length)

console.log(`${nomes[indiceAleatorio]} "${cognome[cAleatorio]}" ${apelidos[indiceApelidoAleatorio]}`)

// Math.hypot(c1, c2)
// console.log(Math.sign(-2))

