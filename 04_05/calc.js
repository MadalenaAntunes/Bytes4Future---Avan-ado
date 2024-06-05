//DADOS
const operacoes = [
    { op: "+", action: (a, b) => a + b },
    { op: "-", action: (a, b) => a - b },
    { op: "/", action: (a, b) => a / b },
    { op: "*", action: (a, b) => a * b },
]

let calc = {
    historico: [],
    ultimoResultado: 0n,
}




//METODOS
function aplicaOp(a, b, operation) {
    const opObject = operacoes.find(ope => ope.op === operation)
    if (!opObject) return

    const res = opObject.action(a, b)
    calc.ultimoResultado = BigInt(res)
    calc.historico.push(`${a} ${operation} ${b} = ${res}`)
}

function correctArguments(a, b) {
    return [
        b ? BigInt(a) : calc.ultimoResultado,
        b ? BigInt(b) : BigInt(a)
    ]
}

function somar(a, b) {
    const [esquerda, direita] = correctArguments(a, b)
    aplicaOp(esquerda, direita, "+")
    return calc
}
function multiplicar(a, b) {
    const [esquerda, direita] = correctArguments(a, b)
    aplicaOp(esquerda, direita, "*")
    return calc
}
function subtrair(a, b) {
    const [esquerda, direita] = correctArguments(a, b)
    aplicaOp(esquerda, direita, "-")
    return calc
}
function dividir(a, b) {
    const [esquerda, direita] = correctArguments(a, b)
    aplicaOp(esquerda, direita, "/")
    return calc
}
function toJSON() {
    return {
        historico: calc.historico,
        ultimoResultado: String(calc.ultimoResultado)
    }
}
function toString() {
    if (calc.historico.length === 0) {
        return "Calculadora Limpa"
    }
    return `=== Histórico da Calculadora ===
${calc.historico.map((l, i) => `${i + 1}. ${l}`).join("\n")}
=== Fim do Histórico ===
Foram realizadas ${calc.historico.length} operações
Último Resultado: ${calc.ultimoResultado}`
}

function limparHistorico() {
    calc = {
        historico: [],
        ultimoResultado: 0n
    }
    return calc
}

function obterResultado() {
    return BigInt(calc.ultimoResultado)
}





















const operacoes_test = [
    { slug: "+", callback: (a, b) => a + b },
    { slug: "-", callback: (a, b) => a - b },
    { slug: "*", callback: (a, b) => a * b },
    { slug: "/", callback: (a, b) => a / b },
]
class Calculadora_Test {
    #history
    #lastResult

    constructor() {
        this.#history = []
        this.#lastResult = 0n;
    }

    #corrigirArgumentos(a, b) {
        const valor1 = b === Number(b) || b === BigInt(b ?? 0) ? a : this.#lastResult
        const valor2 = b === Number(b) || b === BigInt(b ?? 0) ? b : a

        return [BigInt(valor1), BigInt(valor2)]
    }

    #aplicaOperacao(a, b, op) {
        const operacao = operacoes_test.find(operacao => operacao.slug === op)
        const result = operacao.callback(a, b)

        this.#lastResult = result
        this.#history.push({ a, b, op, result })
    }

    somar(a, b) {
        const valores = this.#corrigirArgumentos(a, b)
        this.#aplicaOperacao(valores[0], valores[1], "+")
        return this
    }

    subtrair(a, b) {
        const valores = this.#corrigirArgumentos(a, b)
        this.#aplicaOperacao(valores[0], valores[1], "-")
        return this
    }
    multiplicar(a, b) {
        const valores = this.#corrigirArgumentos(a, b)
        this.#aplicaOperacao(valores[0], valores[1], "*")
        return this
    }
    dividir(a, b) {
        const valores = this.#corrigirArgumentos(a, b)
        this.#aplicaOperacao(valores[0], valores[1], "/")
        return this
    }

    obterResultado() {
        return BigInt(this.#lastResult)
    }

    toJSON() {
        return {
            historico: this.#history.map(({ a, b, op, result }) => `${a} ${op} ${b} = ${result}`),
            ultimoResultado: String(this.#lastResult)
        }
    }

    limparHistorico() {
        this.#history = [];
        this.#lastResult = 0n;

        return this;
    }

    toString() {
        let res = "=== Histórico da Calculadora ===\n"
        res += this.#history.map(({ a, b, op, result }, i) => `${i + 1}. ${a} ${op} ${b} = ${result}`).join("\n")
        res += "\n"
        res += "=== Fim do Histórico ===\n"
        res += `Foram realizadas ${this.#history.length} operações\n`
        res += `Último Resultado: ${this.#lastResult}`
        return res


    }
}









let expected


calc_test_1852 = new Calculadora_Test()

dividir(350, 187)
multiplicar(68513, 98861)
somar(31909)
subtrair(350, 61883)
dividir(9641)
multiplicar(84351, 95845)
somar(62389, 65564)
subtrair(80579, 38040)

calc_test_1852 = calc_test_1852.dividir(350, 187)
calc_test_1852 = calc_test_1852.multiplicar(68513, 98861)
calc_test_1852 = calc_test_1852.somar(31909)
calc_test_1852 = calc_test_1852.subtrair(350, 61883)
calc_test_1852 = calc_test_1852.dividir(9641)
calc_test_1852 = calc_test_1852.multiplicar(84351, 95845)
calc_test_1852 = calc_test_1852.somar(62389, 65564)
calc_test_1852 = calc_test_1852.subtrair(80579, 38040)


console.log(
    toString()
)

