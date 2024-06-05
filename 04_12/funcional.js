// // function soma(a, b) {
// //     return a + b
// // }

// // let res = 0
// // const soma = (a, b) => res = a + b

// //[X] - Dados os mesmos argumentos, retorna sempre o mesmo valor;
// //[ ] - Não tem efeitos secundários.


// // const coisasAnteriores = 3.48 //...
// // const soma = (a, b) => a + b + Math.random()
// // soma(coisasAnteriores, -1)
// //[ ] - Dados os mesmos argumentos, retorna sempre o mesmo valor;
// //[x] - Não tem efeitos secundários.

// const a = 13

// a = 5

// const b = { nome: "Pasijfsafij" }
// b.nome = "Raquel"

// const b = { nome: "Pasijfsafij" }
// b = { nome: "Raquel" }

// // let res = ""
// // function coisas() {
// //     let a = 3
// //     res = "grtfy"
// //     a = 4
// //     return a
// // }

// let arr = [1, 2, 3]

// function a1() {
//     let arr2 = []

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (element % 2 === 0) {
//             arr2.push(element)
//         }
//     }
//     return arr2
// }

function a3() {
    return 3
}

function a2() {
    return a3
}

const resultado = a2()
console.log(resultado)
console.log(typeof resultado)
console.log(resultado())


const arraty = [3, 1, 2, 4, 5]
const res = []
for (let i = 0; i < arraty.length; i++) {
    const element = arraty[i];
    res.push(element * 2)
}

const res2 = arraty.map(element => element * 2)
console.log(res2)
const res3 = res2.toSorted((a, b) => b - a)
console.log(res3)
console.log(res2)
// const res3 = res2.toSorted((a, b) => b - a)
// console.log(res2)

// function ordenaIsso(arr) {
//     return arr.toSorted((a, b) => b - a)
// }

// const ord = ordenaIsso(res2)
// console.log()

const meses = new Map([
    ["jan", "Janeiro"],
    ["feb", "febeiro"],
    ["mar", "mareiro"],
    ["abr", "abreiro"],
])

// meses.set("mai", "maieiro")
const novoMapa = new Map([...meses, ["mai", "maieiro"]])
console.log(novoMapa)

//Map
// ["a", "b", "c"] => ["aa", "bb", "cc"]
//Filter
// ["a", "b", "c"] => ["a", "b"]
// ["a", "b", "c"] => "a" (elemento do array OU undefined)


const oMeuJogo = ["_", "X", "_"]

function adicionarJogada(coluna) {
    if (oMeuJogo[coluna] === "_") {
        oMeuJogo[coluna] = "X"
    }
}

adicionarJogada(0)

const jogo = [
    "aasfsa",
    ["p", "e", "n", "elope"], "egrehg"]

const array = jogo[1]
console.log(array) //["p", "e", "n", "elope"]
array[0] //"p"

jogo[1][0] //"p" //jogo[linha][coluna]

class Jogo {
    constructor() {
        this.tabuleiro = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ],
            this.jogadorAtual = "X"
    }

    adicionarJogada(linha, coluna) {
        if (this.tabuleiro[linha][coluna] === "_") {
            this.tabuleiro[linha][coluna] = this.jogadorAtual
            this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X"
        }

        return this
        // if(this.jogadorAtual === "X") {
        //     this.jogadorAtual = "O"
        // } else {
        //     this.jogadorAtual = "X"
        // }
    }
}

let jo = new Jogo()
jo = jo.adicionarJogada(0, 2)
console.log(jo)

[
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]

 =>
 ["", "", "", "", "", "", "", ""].every(safdgftbhga => safdgftbhga !== "_")