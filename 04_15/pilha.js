class Stack {
    constructor() {
        this.stack = []
    }

    add(algo) {
        this.stack.push(algo)
    }
    remove() {
        const elemento = this.stack[this.stack.length - 1]
        this.stack.pop(algo)
        return elemento
    }
}

const dic = [


    ["e", "janeiro"], //0
//   0     1



    [2, "janeiro"],
    [3, "janeiro"],
    [4, "janeiro"],
    [5, "janeiro"],
    
    
    [6, "janeiro"],


    [7, "janeiro"],
]

const def = dic.find(apartamento => apartamento[0] === 1)
if (def) {
    def[1]
}
