const { contaVotos, numero } = require("./contaVotos")

test("funcao contaVotos", () => {
    const input = [
        {
            name: "Jorge",
            age: 84,
            voted: true
        },
        {
            name: "Jorge",
            age: 84,
            voted: false
        },
        {
            name: "Jorge",
            age: 84,
            voted: false
        },
        {
            name: "Jorge",
            age: 84,
            voted: true
        },
        {
            name: "Jorge",
            age: 84,
            voted: false
        }
    ]

    expect(contaVotos(input)).toEqual({votos: 2, potencial: 5})
})