function formataNumero(valor){
    if (typeof valor !== "number") return "Número não válido."

    let string = valor.toString()

    let guardaString = ""

    for(let i = 0; i < string.length; i++){
        const currentAndNextAreEven = (string[i] % 2 === 0) && (string[i + 1] % 2 === 0)
        console.log(currentAndNextAreEven)
        if (currentAndNextAreEven){
            guardaString += string[i] + "-"
          
        } else {
            guardaString += string[i]
        }
    }
    return guardaString
}

console.log(formataNumero(8392224))