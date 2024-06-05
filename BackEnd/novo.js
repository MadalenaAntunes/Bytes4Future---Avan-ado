const express = require("express")
const app = express()
const PORT = 3030

app.use(express.static("public")) //torna os ficheiros da pasta public estáticos

app.use(express.json())

app.post("/", (req, res) => {
    const { batatas } = req.body
    console.log(req.header("content-type"))
    console.log(req.header("accept"))
    res.json({ mensagem: `SIM, ${batatas}` })
})

app.listen(PORT, () => {
    console.log("À escuta na porta http://localhost:3030")
})

