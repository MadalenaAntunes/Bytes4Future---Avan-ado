const express = require("express")

const { cleanUserData } = require("./src/services/user")

const app = express()
const PORT = 3030

app.post("/api/v1/users", async (req, res) => {
    try {

        const { username, email, password, passwordConf } = req.body
        const userToInsert = cleanUserData({
            username, email, password, passwordConf
        })

        if(!userToInsert.ok) {
            return res.sendStatus(400).json({message: "Problemas nos dados"})
        }
        
        const existingUser = getUserByEmail(email)
        if (existingUser) {
            return res.sendStatus(400).json({message: "E-mail já está em uso"})
        }

        const result = addUser(userToInsert.obj)
        res.sendStatus(201)


    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
