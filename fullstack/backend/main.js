const express = require("express")
const app = express()
const PORT = 3333

let num = {
    number: 0
}

app.use(express.json())

app.get("/api/counter", (req, res) => {
    res.json({number: num.number})
})

app.post("/api/counter/increment", (req, res) => {
    num.number++
    res.status(201).json({number: num.number})
})

app.post("/api/counter/decrement", (req, res) => {
    num.number--
    res.status(201).json({number: num.number})
})

app.post("/api/counter/reset", (req, res) => {
    num.number = 0
    res.status(201).json({number: num.number})
})

app.listen(PORT, (() => {
    console.log("Estou à escuta :p")
}))