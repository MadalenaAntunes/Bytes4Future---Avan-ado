const express = require("express")
const app = express()
const PORT = 3001

// animal = {
//     id: number,
//     birthDay: String,
//     name: String,
//     dono: Id,
//     reservas: []
// }

// dono = {
//     id: number,
//     name: String,
//     email: String
// }

const donos = []
const animais = []

app.use(express.json())

//Criar um dono
app.post("api/dono", (req, res) => {
    const { email, nome } = req.body
    const id = donos.length + 1
    
    donos.push({id: id, email: email, nome: nome})

    res.status(201).json({id})
})

//Criar um animal ligado a um dono
app.post("api/animal/dono", (req, res) => {
    const { dono } = req.params
    const { birthDay, name, reservas } = req.body
    const id = animais.length + 1

    animais.push({ id: id, name: name, birthDay: birthDay, dono: dono, reservas: reservas })
    
    res.status(201).json({id})
})

//Listar todos os animais de um dono
app.get("api/animais/:dono", (req, res) => {
    const { dono } = req.params

    const resultado = animais.filter((animal) => animal.dono === dono )

    res.status(200).json({resultado})
})

//Obter os dados de um animal pelo seu ID
app.get("api/animal/:id", (req, res) => {
    const { id } = req.params
    const dadosAnimal = animais.find((animal) =>  animal.id === id )

    res.status(200).json({dadosAnimal})
})

//Atualizar parcialmente um animal
app.patch("api/animal/:animal", (req, res) => {
    const { id } = req.params
    const { reservas, dono } = req.body

    animais.map((animal) => {
        if (animal.id === id) {
            return {
                id: animal.id,
                birthDay: animal.birthDay,
                name: animal.name,
                reservas: reservas ? reservas : animal.reservas,
                dono: dono ? dono : animal.dono
            }
        }
        return animal
    })
    res.status(200).json({mensagem: "alterado"})
})

app.listen(PORT, () => {
    console.log("À escuta na porta http://localhost:3001")
})

