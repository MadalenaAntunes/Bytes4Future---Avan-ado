const dataAtual = new Date()
const dataAtual2 = new Date(2024, 3, 5, 15)
const dataAtual3 = new Date("2024-04-05")
const dataAtual4 = new Date(10)

// console.log(dataAtual.valueOf())
// console.log(dataAtual2.valueOf())
// console.log(dataAtual3.valueOf())
// console.log(dataAtual4.valueOf())



const emailCerto = true
const passwordCerta = true

if(emailCerto && passwordCerta) {
    const dataDeExpiracao = new Date(new Date().valueOf() + 1000 * 60 * 2)
    console.log(new Date())
    console.log(dataDeExpiracao)

    console.log(dataDeExpiracao.getDay())
}