const express = require("express")
const app = express()

const PORT = 3030

const n = {
    number: 0
}

app.get("/api/counter", (req, res) => {
    res.status(203).json({ number: n.number })
})

app.post("/api/counter/increment", (req, res) => {
    n.number++
    res.status(201).json({ number: n.number })
})

app.post("/api/counter/decrement", (req, res) => {
    n.number--
    res.status(201).json({ number: n.number })
})

app.listen(PORT, () => console.log("Listening"))