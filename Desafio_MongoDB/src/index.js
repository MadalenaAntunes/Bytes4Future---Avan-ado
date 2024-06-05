const {getAllUsers, getUserByEmail, verifyPass} = require("../services/users")
const express = require("express")
const app = express()
const PORT = 3333

app.use(express.json())

const userRegistration = {
    "email": "teste@teste.com",
    "password": "A1b2C3d$",
    "passwordConfirmation": "A1b2C3d$"
}

app.post("/api/auth/signup", async (req, res) => {
    const {email, password, passwordConfirmation} = req.body
    const verification = await getUserByEmail(email) // FALSE - não tem email | TRUE -  tem email
    if (password !== passwordConfirmation || verification) {
        return res.status(400).json({
            "message": "Os dados introduzidos não são válidos.",
	        "errors": {
		        "email": verification === true ? "O endereço introduzido já está registado." : undefined,
		        "passwordConfirmation": password !== passwordConfirmation ? "As passwords não coincidem." : undefined
	        }
        })
    }

    const userId = await getAllUsers({ email, password, passwordConfirmation })
    res.status(200).json({message: "Utilizador Criado com Sucesso!", _id: userId})
})

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body
    const verification = await getUserByEmail(email)
    if (!verification) {
        return res.status(404).json({message: "O utilizador não foi encontrado!"})
    }
    const passwordCheck = await verifyPass()
    if (!passwordCheck) {
        return res.status(401).json({message: "A password introduzida é inválida!"})
    }
    //CRIAR TOKEN
    res.status(200).json({token: ""})
})

app.get("/api/user", (req, res) => {
    
})

app.get("/api/user/:id", (req, res) => {
    
})

app.listen(PORT, () => console.log(`À escuta em http://localhost:${PORT}`))