const express = require("express")
const app = express()
app.use(express.json())

const PORT = 3030

app.get("/api/users", (req, res) => {
    res.json({message: "Olá!"})
})

app.post('/soma', (req, res) => {
    const {a, b} = req.body
    res.status(200)
       .json({ resultado: a + b })
  })

app.listen(PORT, () => {
    console.log("ESTOU LIGADO NA PORTA:3030")
})