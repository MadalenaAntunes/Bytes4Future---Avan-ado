function soma(a: number, b: number) : number {
    return a + b 
}

console.log(soma(16, 25))


function insertNoArray(array: any[], elem: any) {
    array.push(elem)
    return array
}

const horta = ["batatas", 2 , 8]

console.log(insertNoArray(horta, "tomate"))


class Generica {
    arr:string[] = []

    insertArr(elm: string) {
        this.arr.push(elm)
    }
}

const teste = new Generica()

teste.insertArr("qualquer coisa")

console.log(teste.arr)