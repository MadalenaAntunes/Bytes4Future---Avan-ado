async function getToDo() {
    try {
        const url = "http://localhost:3030"
        const res = await fetch(url, {
            method: "POST",
            header: {
                "Content-Type": `application/json`,
                "Accept": `application/json`
            },
            body: JSON.stringify({
                batats: "SAO BOAS"
            })
        })
        const json = await res.json()
        console.log(json)
    } catch (err) {
        console.log(err)
    }
}

getTodo()
