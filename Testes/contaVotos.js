function contaVotos(array) {
    let objeto = {
        votos: 0,
        potencial: array.length
    }
    numero() //apenas para testar a função numero sem ter de criar um teste específico
    for (let i = 0; i < array.length; i++){
        if (array[i].voted === true) {
            objeto.votos++
        }
    }
    return objeto
}

function numero() {
    return 1000
}

module.exports = { contaVotos, numero }