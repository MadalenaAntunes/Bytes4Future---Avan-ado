const operacoes = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["/", (a, b) => a / b],
    ["*", (a, b) => a * b],
    ["**", (a, b) => a ** b],
]);

class Calculadora {
    constructor() {
        this.historico = [];
        this.ultimoResultado = 0n;
    }

    aplicaOperacao(a, b, op) {
        if (!b) {
            b = BigInt(a);
            a = this.ultimoResultado;
            const resultado = operacoes.get(op)(a, b);
            this.historico.push(
                `${this.ultimoResultado} ${op} ${b} = ${resultado}`
            );
            this.ultimoResultado = resultado;
            return this;
        }

        a = BigInt(a);
        b = BigInt(b);
        const resultado = operacoes.get(op)(a, b);
        this.historico.push(`${a} ${op} ${b} = ${resultado}`);
        this.ultimoResultado = resultado;
        return this;
    }

    somar(a, b) {
        return this.aplicaOperacao(a, b, "+");
    }

    subtrair(a, b) {
        return this.aplicaOperacao(a, b, "-");
    }

    dividir(a, b) {
        return this.aplicaOperacao(a, b, "/");
    }

    multiplicar(a, b) {
        return this.aplicaOperacao(a, b, "*");
    }
    potencia(a, b) {
        return this.aplicaOperacao(a, b, "**");
    }

    limparHistorico() {
        this.historico = [];
        this.ultimoResultado = 0n;
        return this;
    }

    obterResultado() {
        return this.ultimoResultado;
    }

    toJSON() {
        return {
            historico: this.historico,
            ultimoResultado: String(this.ultimoResultado),
        };
    }

    toString() {
        if (this.historico.length === 0) return "Calculadora Limpa";

        return `=== Histórico da Calculadora ===
${this.historico.map((ele, i) => `${i + 1}. ${ele}`).join("\n")}    
=== Fim do Histórico ===
${
    this.historico.length === 1
        ? `Foi realizada 1 operação`
        : `Foram realizadas ${this.historico.length} operações`
}
Último Resultado: ${this.ultimoResultado}`;
    }
}

// const calc = new Calculadora();

module.exports = {
    Calculadora
}
