const express = require("express")
const { getAllYeah } = require("../services/yeah")
const app = express()
const PORT = 3030

app.use(express.json())

app.get("/api/yeah", async (req, res) => {
    const yeah = await getAllYeah()
    if (yeah.length === 0) {
        res.status(400)
    }
    res.status(200).json({yeah: yeah})
})

app.listen(PORT, () => {console.log("Estou à escuta :p")})