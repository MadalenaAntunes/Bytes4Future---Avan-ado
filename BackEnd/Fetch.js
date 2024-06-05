async function getTodo() {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos"
        const res = await fetch(url, {
            method: "GET" ,//default, não é necessário colocar caso seja GET
            header: " ", //string
            body: user //json
        })
        const json = await res.json()
        console.log(json)
    } catch (err) {
        console.log(err)
    }
}

getTodo()