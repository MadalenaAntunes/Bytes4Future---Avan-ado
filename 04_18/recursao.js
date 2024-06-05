const array = ["a", "b", "c"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
// }

// ["b"]
// function percorre(array) {
//     console.log(array[0])
//     if (array.length > 1) {
//         percorre(array.slice(1))
//     }

// }
// percorre(["a", "b", "c"])
// {
//      "a"
//      percorre(["b", "c"]) 
//      {
//          "b"
//          percorre(["c"]) 
//          {
//              "c"
//          }
// }
// }
// percorre(["c"]) //"c"

// ["a"] //[]
// ["a", "b", "c"] //["b"]
// ["a", "b", "c", "d"] //["b", "d"]
//   0    1    2    3
// function mantemIndicesImpares(array) {
//     console.log(array)
//     if (array.length <= 1) {
//         console.log("ADEUS")
//         return []
//     }
//     if (array.length >= 2) {
//         console.log("OLA")
//         return [array[1]].concat(mantemIndicesImpares(array.slice(2)))
//     }
// }

// console.log(mantemIndicesImpares(["a", "b", "c", "d"]))

// [2, 3, 2, 2, 2, 2, 3]
function mantemElementosPares(array) {
    const isEven = array[0] % 2 === 0
    if (array.length === 0) {
        return []
    }
    //[6, 7, 5]
    if (isEven) {
        //     [6].concat(f([7, 5]))
        //                 [].concat(f([5]))
        //                             [].concat(f([]))
        //                                          []
        return [array[0]].concat(mantemElementosPares(array.slice(1)))
    }
    return mantemElementosPares(array.slice(1))

}

// console.log(mantemElementosPares([1, 2, 2, 3, 1, 5, 4]))


function countEven(array) {
    const element = array[0]
    const isEven = element % 2 === 0
    if (array.length === 0) {
        return 0
    }
    if (isEven) {
        return 1 + countEven(array.slice(1))
    }
    return 0 + countEven(array.slice(1))
}

console.log(
    countEven([1, 2, 4, 3, 4])
    //      0 + countEven([2, 4, 3, 4])
    //              1 + countEven([4, 3, 4])
    //                      1 + countEven([3, 4])
    //                              0 + countEven([4])
    //                                      1 + countEven([])
    //                                              0


    //  0 + 1 + 1 + 0 + 1 + 0
)



countEven([2, 4, 3, 4])
// 1 + countEven([4, 3, 4])


countEven([4, 3, 4])
// 1 + countEven([3, 4])


countEven([3, 4])
// 0 + countEven([4])

countEven([4])
// 1 + countEven([])

countEven([])
// 0


// multiplica(soma(3, divisao(4, soma(1, 1))))

i = 4
j = 4
const element = matrix[i][j]
const queue = [
    [i + 1, j],
    [i - 1, j]
    [i, j + 1]
    [i, j - 1]
]

while (queue > 0) {
    const coords = queue[0] //[5, 4]
    if (array[coords[0]][coords[1]] === element) {
        //Obter vizinhos dessas coords
        //Adicionar vizinhos à queue
        //Adicinar coordenada à ilha
    }
}

{/* <Nonogram size={20}/> */ }


<div>
    <button id="ola">ENTRAR</button>
</div>

const button = document.getElementById("ola")
// const button = document.querySelectorAll("button")
while (true) {
    button.click()
}

button.onmouseenter(() => button.style.backgroundColor = "blue")
button.style.backgroundColor = "red"

//Declarar
function UserProfile(props) {
    return (
        <div>
            <p>{props.nome}</p>
            <div>3 + 2</div>
            <div>{3 + 2}</div>
            <img src={props.imagem}/>
        </div>
    )
}

//Utilizar
<UserProfile imagem="dgsdfgagf" user={{avatarUrl: "asdsa", name: "asdad"}} nome="asfasf" />
<UserProfile imagem="Comi cenoura e olha no que deu" nome="asfasf" />
<UserProfile imagem="aawsddas" nome="asfasf" />
<UserProfile imagem="asfasffas" nome="asfasf" />
<UserProfile imagem="Sou o Nurb" nome="asfasf" />



