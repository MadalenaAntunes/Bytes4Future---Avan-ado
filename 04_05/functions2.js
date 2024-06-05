function main(esquerda, direita) {
    const soma = (a, b) => a + b
    soma(esquerda, direita)
}

main(3, 2)

const cat = {
    name: "Liriam",
    age: 16,
    alive: false
}
const cat2 = '{"name": "Liriam","age": 16,"alive": false}'

const studentsList = [
    {
        id: 1,
        firstName: "Greg",
        certificate: true,
        scores: {
            module1: 70,
            module2: 30,
            module3: 100,
        }
    },
    {
        id: 2,
        firstName: "Fitzgerald",
        certificate: true,
        scores: {
            module1: 80,
            module2: 60,
            module3: 5,
        }
    },
]

// Math.max(2, 3, 4, 10, 234, 1, 4, 65, 2, 1, 4, 1, 24, 45, 124, 124, 5, 6, 12, 2, 24, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 2)
//Gera um array com 1000 elementos, que são numeros aleatorios entre 0 e 99 (inteiros)
let array = new Array(1000).fill("").map(e => Math.floor(Math.random() * 100))
console.log(array)
console.log(Math.max(...array))

function soma(a, b) {

    console.log(arguments)

    // arguments[0] //a
    // arguments[1] //b
    // arguments[2] //

    // return arguments[0]+arguments[1]
    //Equivalente a 
    // return a + b
}

console.log(soma(array, undefined))
